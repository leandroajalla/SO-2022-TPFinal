var net = require('net');
const readline = require('readline-sync')
const options = {
    port : 5000,
    host: 'localhost'
}
const client = net.createConnection(options)

client.on('connect',()=>{                   //conectamos al servidor
    console.log('Conexion exitosa')
    sendLine()
})

client.on('error',(err)=>{
    console.log(err.message)
})
client.on('data',(data)=>{
    console.log(''+ data)
    sendLine()
})

function sendLine(){
    var line = readline.question('Escribir: ')   //es para escribir nuestro mensaje
    if (line == "0"){
        client.end()
    }else{
        client.write("Cliente dijo: " + line +"\n") // enviamos el mensaje
    }
}
