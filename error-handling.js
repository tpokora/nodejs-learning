/**
 * Created by Tomek on 2015-06-27.
 */

var connect = require('connect');

function errorHandler() {
    var env = process.env.NODE_ENV || 'development';

    return function(err, req, res, next) {
        res.statusCode = 500;
        switch (env) {
            case 'development':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));
                break;
            default:
                res.end('Server error');
        }
    }
}

connect()
    .use(function(req, res) {
        foo();
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    })
    .use(errorHandler())
    .listen(3000);
