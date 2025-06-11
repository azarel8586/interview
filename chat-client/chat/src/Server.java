import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.util.concurrent.CopyOnWriteArrayList;

public class Server {
    // copy the ports I care about
    private static final int PORT = 12345;
    // list of clients
    private static CopyOnWriteArrayList<ClientHandler> clients = new CopyOnWriteArrayList<>();

    public static void main (String[] args) {
        try {
            // also establish the socket
            ServerSocket serverSocket = new ServerSocket(PORT);
            System.out.println("Server is now awaiting connections.");

            // we can also allow an admin to input to the server - start the loop
            new Thread(() -> {
                Scanner scanner = new Scanner(System.in);
                while (true) {
                    String serverMessage = scanner.nextLine();
                    // send the server message to all connected clients
                }
            }).start();

            // start listening for clients
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("New Client Connected:");

                ClientHandler clientHandler = new ClientHandler(clientSocket);
                clients.add(clientHandler);
                new Thread(clientHandler).start(); // runable
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Broadcast to all clients
    public static void broadcast(String msg, ClientHandler sender) {
    }

    // also need a way to represent the connected client - queue a class!
    private static class ClientHandler implements Runnable {
        // client meta
        private Socket clientSocket;
        private PrintWriter out;
        private BufferedReader in;
        private String username;

        public ClientHandler(Socket socket) {
            this.clientSocket = socket;
            // try catch our in and outs
            try {
                out = new PrintWriter(clientSocket.getOutputStream(), true);
                in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        public void sendMessage (String msg) {
            out.println(msg);
        }

        // implement RUN
        @Override
        public void run() {
            try {
                out.println("Enter your username:");
                this.username = in.readLine();
                // log
                System.out.println("User " + username + " connected.");
                out.println("Welcome to the chat.");
                out.println("Start chatting");
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                // close up crap
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
