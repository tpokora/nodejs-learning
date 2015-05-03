#!/usr/bin/env node
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    if (request.url === '/') {
        loadHtml('test', response);
    }
    if (request.url === '/yo') {
        loadHtml('hello', response);
    }
}).listen(3000);
console.log('Server is listening on port 3000');

function loadHtml(fileName, response) {
    fileName += '.html';
    fs.readFile(fileName, function(err, data) {
        if (err) {
            response.writeHead(200, {'Content-Type': 'text/html','Content-Length': data.length});
            response.end('Wrong request.');
        }
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length': data.length});
        response.end(data);
    });
}