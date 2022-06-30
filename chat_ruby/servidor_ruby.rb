require 'socket'

server = TCPSocket.new 5050

loop do
  client = server.accept

  loop do
    mensajecliente = client.gets
    puts mensajecliente
    sms = gets
    client.puts sms
  end
  
  client.close
end