#!/usr/bin/env node

var http = require('http');

var server = http.createServer(function(request, response) {
    var body = 'Hello World';
    response.setHeader('Content-Length', body.length);
    response.setHeader('Content-Type', 'text/plain');
    response.end(body);
}).listen(3000);
console.log('Server is listening on port 3000.');