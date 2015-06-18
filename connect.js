/**
 * Created by Tomek on 2015-06-18.
 */

var connect = require('connect');

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World! with connect framework');
}

connect()
    .use(logger)
    .use(hello)
    .listen(3000);