import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Write a socket-server chat-server that accepts clients that connect to it over TCP. An example client would be netcat or telnet.
 * In order to start we will focus on creating an MVP version with the most basic functionality. As time permits we will have some
 * follow-ups, so let's focus on getting the MVP running first:
 *
 * Connect and disconnect with multiple client support and basic message forwarding:
 *  - Multi client / broadcast (List of Client handlers / socks?)
 *
 * The chat server should be capable of handling multiple clients connecting at the same time.
 *
 * Disconnection should be handled in a clean way.
 * - please use CLOSE For gods sake
 *
 * Should be able to receive and forward messages among clients (message is not echoed back to sender).
 */
public class Server {
    // lets go!
    private static final int PORT = 1377;
    private static CopyOnWriteArrayList<ClientWrapper> clients = new CopyOnWriteArrayList<>();

    public static void main (String[] args) {
        try {
            // sock serversock....
            ServerSocket serverSocket = new ServerSocket(PORT);
            // logging
            System.out.println("Server is running and live...");

            // Start looking for incoming connections
            while (true) {
                Socket clientSock = serverSocket.accept();
                System.out.println("Client has connected to server!");

                ClientWrapper client = new ClientWrapper(clientSock);
                clients.add(client);
                new Thread(client).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void broadcast (String message, ClientWrapper sender) {
        for (ClientWrapper client : clients) {
            if (client != sender && client.isInit()) {
                client.sendMessage(message);
            }
        }
    }

    private static class ClientWrapper implements Runnable {
        // client props
        private Socket clientSocket;
        private BufferedReader in;
        private PrintWriter out;
        private String handle;
        private boolean init = false;

        public ClientWrapper (Socket socket) {
            this.clientSocket = socket;
            // grab the in and outs
            try {
                in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                out = new PrintWriter(clientSocket.getOutputStream(), true);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        public void sendMessage (String message) {
            out.println(message);
        }

        public String getHandle () {
            return handle;
        }

        public boolean isInit () {
            return init;
        }

        @Override
        public void run() {
            // in here listen for incomming messages on the IN
            try {
                out.println("Welcome to the server");
                while (true) {
                    out.println("Please enter your username or handle:");
                    handle = in.readLine();
                    if (handle == null) {
                        break;
                    }
                    boolean found = false;
                    for (ClientWrapper client : clients) {
                        if (client != this && client.getHandle().equals(handle)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        init = true;
                        out.println("Welcome to the chat " + handle);
                        broadcast(handle + " has joined the chat.", this);
                        break;
                    }
                }

                // LOOPS OF DEATH
                String incomingLine;
                while ((incomingLine = in.readLine()) != null) {
                    // need the ability to send to other clients
                    broadcast(handle + ": " + incomingLine, this);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    in.close();
                    out.close();
                    clientSocket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
