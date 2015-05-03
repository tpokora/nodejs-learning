#!/usr/bin/env node
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

// root directory of static server
// __dirname is special variable provided by node.js
// provides root node of directory
var root = __dirname;

var server = http.createServer(function(req, res) {
    var url = parse(req.url);
    var path = join(root, url.pathname);
    /*
     * Simple implementation of processic file throught server
     *
    var stream = fs.createReadStream(path);
    stream.on('data', function(chunk) {
        res.write(chunk);
    }).
    stream.on('end', function() {
        res.end();
    });
    */
    
    /*
    // Stream#pipe() method, res.end() is called inside stream.pipe()
    stream.pipe(res);
    
    // handle server error exception
    stream.on('error', function(err) {
        res.status = 500;
        res.end('Internal server error.');
    });
    */
    
    fs.stat(path, function(err, stat) {
        if (err) {
            if ('ENOENT' == err.code) {
                res.statusCode = 404;
                res.end('File does not exist.');
            } else {
                res.statusCode = 500;
                res.end('Internal server error.');
            }
        } else {
            res.setHeader('Content-Length', stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);
            stream.on('error', function(err) {
                res.statusCode = 500;
                res.end('Internal server error.');
            })
        }
    });
}).listen(3000);
