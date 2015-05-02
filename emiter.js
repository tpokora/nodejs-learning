var net = require('net');

var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();
channel.on('join', function() {
	console.log('Hello!');
});

var server = net.createServer(function(socket) {
	
}).listen(3000);

