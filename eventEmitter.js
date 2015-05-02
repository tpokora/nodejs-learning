var events = require('events');
var net = require('net');
var url = require('url');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.setMaxListeners(50);

channel.on('join', function(id, client) {
	var welcome = "Hello!\nNumber of guests: "
		+ this.listeners('broadcast').length;
	client.write(welcome + "\n");
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId, message) {
		if (id != senderId) {
			this.clients[id].write(message);
		}
	}
	this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id) {
	channel.removeListener('broadcast', this.subscriptions[id]);
	channel.emit('broadcast', id, id + " has left chat.\n");
});

channel.on('shutdown', function() {
	channel.emit('broadcast', '', "Chat room cloased!\n");
	channel.removeAllListeners('broadcast');
});

var server = net.createServer(function(client) {
	var id = client.remoteAddress + ':' + client.remotePort;
	client.on('connect', function() {
		channel.emit('join', id, client);
		console.log('User (' + id + ') has connected.\n');
	});
	client.on('data', function(data) {
		data = data.toString();
		if (data == "shutdown") {
			channel.emit('shutdown');
		}
		channel.emit('broadcast', id, data);
		this.write("kurwa");
		console.log(id + ": " + data);
	});

	client.on('close', function() {
		channel.emit('leave', id);
	});
});

server.listen(8888);
console.log('Server is listening on port 8888');