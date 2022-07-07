require 'socket'

server = TCPServer.open(5000)

loop {
    Thread.start(server.accept) do |client|
        
        client_msg = client.gets
        puts client_msg
        
        counter = 0
        while counter < 10           
            send = gets.chomp
            client.puts send
            client_msg = client.gets  
            puts client_msg  
        end
    end
}
