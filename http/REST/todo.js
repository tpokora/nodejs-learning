#!/usr/bin/env node
var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(request, response){
    switch (request.method) {
        // handling POST method to send data to server
        case 'POST':
            var item = '';
            request.setEncoding('utf8');
            // adding every chunk of data to item variable
            request.on('data', function(chunk) {
                item += chunk; 
            });
            // adding whole piece of data into table
            request.on('end', function() {
                items.push(item);
                response.end('OK\n');
            });
            break;
        // handling POST method to get data from server
        case 'GET':
            var body = items.map(function(item, i) {
                return i + ') ' + item;
            }).join('\n');
            // making sure that response is limited to size of body
            // Buffer.byteLength() converts data stream to bytes
            response.setHeader('Content-Length', Buffer.byteLength(body));
            response.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            response.end(body);
            break;
        // handling DELETE method to delete data from server
        case 'DELETE':
            var path = url.parse(request.url).pathname;
            var i = parseInt(path.slice(1), 10);
            
            if (isNaN(i)) {
                response.statusCode = 400;
                response.end('Incorrect element index.');
            } else if (!items[i]) {
                resposne.statusCode = 404;
                resposne.end('Element not found.');
            } else {
                items.splice(i, 1);
                response.end('OK\n');
            }
            break;
    }
}).listen(3000);
console.log('Server is listening on port 3000.');