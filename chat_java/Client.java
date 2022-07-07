import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args){
        final Socket clientSocket; // Socket al que accede el cliente para recibir y enviar datos
        final BufferedReader in;   // Permite leer datos en el socket
        final PrintWriter out;     // Permite escribir datos en el socket
        final Scanner sc = new Scanner(System.in); // Permite leer los datos ingresados por el cliente a través del teclado
        try {
            clientSocket = new Socket("localhost",5000);
            out = new PrintWriter(clientSocket.getOutputStream());
            in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            Thread sender = new Thread(new Runnable() {
                String msg;
                @Override
                public void run() {
                    while(true){
                        msg = sc.nextLine();
                        out.println(msg);
                        out.flush();
                    }
                }
            });
            sender.start();
            Thread receiver = new Thread(new Runnable() {
                String msg;
                @Override
                public void run() {
                    try {
                        msg = in.readLine();
                        while(msg != null){
                            System.out.println("Servidor: " + msg);
                            msg = in.readLine();
                        }
                        System.out.println("El Servidor no se encuentra disponible");
                        out.close();
                        clientSocket.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
            receiver .start();
    }catch (IOException e){
        e.printStackTrace();
        }
    }
}