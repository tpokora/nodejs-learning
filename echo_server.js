var net = require('net');
var port = 3000;

var server = net.createServer(function(socket) {
	socket.write('Welcome to our super mega server!\r\n');
	socket.write('Type something!\r\n');
	socket.on('data', function(data) {
		socket.write("You just typed: " + data + "\r\n");
		console.log(data.toString());
	});
}).listen(port);
console.log("Echo server is listening on port " + port);