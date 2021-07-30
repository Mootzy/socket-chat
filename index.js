//const http = require('http')

//const hostname = '127.0.0.1'
//const port = process.env.PORT

//const server = http.createServer((req, res) => {
 // res.statusCode = 200
 // res.setHeader('Content-Type', 'text/plain')
 // res.end('Hello World!\n')
//})

//server.listen(port, hostname, () => {
 // console.log(`Server running at http://${hostname}:${port}/`)
//})


const express = require('express');
console.log("worked");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

		socket.on('chat message', (msg) => {
		io.emit('chat message', msg);	
	});
});


server.listen(3000, () => {
	console.log('listening on *:3000');
});
