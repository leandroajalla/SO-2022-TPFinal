require 'socket'

s = TCPServer.new '0.0.0.0', 5050

loop do
    sms = gets
    s.puts sms
    line = s.gets
    puts line
    sms = gets
    s.puts sms
end

s.close