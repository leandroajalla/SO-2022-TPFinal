const net = require('net');
const readline = require('readline-sync')

const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log("\nEl cliente dice: " + data)
        sendLine()
    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })

    function sendLine() {
        var line = readline.question('\nEscribir: ')
        if (line == "0") {
            socket.end()
        }else{
            socket.write(line)
        }
    } 
})

server.listen(5050, ()=>{
    console.log('servidor conectado en el puerto: ', server.address().port)

})

