var net = require('net');
const readline = require('readline-sync')

const server = net.createServer()       // creamos la constante del servidor

server.on('connection',(socket)=>{              // conecamos el servidor
    socket.on('data', data =>{
        console.log(""+ data)
        sendLine()
    })
    socket.on('close',()=>{
        console.log("Comunicacion finalizada")          //cuando se desconecta con exito imprimimos el mensaje
    })
    socket.on('error', (err)=>{
        console.log(err.message)
    })
    function sendLine(){                                    //es para escribir nuestro mensaje
        var line = readline.question('Escribir: ')  
        if (line == "0"){
            socket.end()
        }else{
            socket.write("Servidor dijo: " + line + "\n")      // enviamos el mensaje
        }
    
    }

})

const port = 5000

server.listen(port, ()=>{
    console.log("Servidor conectado en el puerto ", server.address().port)  // Cuando se conecta nos envia el mensaje de exito
})
