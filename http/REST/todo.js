#!/usr/bin/env node
var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(request, response){
    switch (request.method) {
        case 'POST':
            var item = '';
            request.setEncoding('utf8');
            request.on('data', function(chunk) {
                item += chunk; 
            });
            request.on('end', function() {
                items.push(item);
                response.end('OK\n');
            });
            break;
        case 'GET':
            var body = items.map(function(item, i) {
                return i + ') ' + item;
            }).join('\n');
            response.setHeader('Content-Length', Buffer.byteLength(body));
            response.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            response.end(body);
            break;
    }
}).listen(3000);
console.log('Server is listening on port 3000.');