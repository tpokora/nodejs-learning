var connect = require('connect');
var router = require('router');
var routes = {
    GET: {
        '/': function(req, res) {
            res.end('Hello World');
        },
        '/users': function(req, res) {
            res.end('Hello users');
        },
        '/user/:id': function(req, res, id) {
            res.end('User ' + id);
        }
    }, DELETE: {
        '/user/:id': function(req, res, id) {
            res.end('Deleted user ' + id);
        }
    }
};

var app = connect();
app.use(router(routes));
app.listen(3000);
