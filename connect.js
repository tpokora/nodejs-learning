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

function restrict(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        return next(new Error('User not authorized.'));
    }
    var parts = authorization.split(' ');
    var scheme = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    authenticateWithDatabase(user, pass, function (err) {
        if (err) {
            return next(err);
        }
        next();
    });
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('Try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['james', 'john', 'emily']));
            break;
    }
}

/*
    User curl http://localhost:3000 to see results in console

 */

connect()
    .use(logger)
    .use('/admin', restrict)
    .use('/admin', admin)
    .use(hello)
    .listen(3000);


var app = connect();
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!');
});
app.use(logger);
app.listen(4000);