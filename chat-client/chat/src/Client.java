import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    // copy in the server address and port
    private static final String SERVER_ADDRESS = "localhost";
    private static final int SERVER_PORT = 12345;

    public static void main (String[] args) {
        try {
            // start with my socket
            Socket socket = new Socket(SERVER_ADDRESS, SERVER_PORT);
            // log as you go
            System.out.println("Connected to the chat server.");

            // We need input and output streams
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            // start a thread to handle incoming messages
            new Thread(() -> {
               try {
                   String serverResponse;
                   while ((serverResponse = in.readLine()) != null) {
                       System.out.println(serverResponse);
                   }
               } catch (IOException e) {
                   e.printStackTrace();
               }
            }).start();

            // and now take inputs and send to the server
            Scanner scanner = new Scanner(System.in);
            String userText;
            while (true) {
                // loop forever to listen
                userText = scanner.nextLine();
                out.println(userText);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
