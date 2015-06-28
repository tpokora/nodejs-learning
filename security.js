var connect = require('connect');
var basicAuth = require('basic-auth-connect');

// curl http://localhost:3000 --user login:pass -> User found!
// curl http://localhost:3000 -> unauthorized

var app = connect()
  .use(basicAuth('login', 'pass'))
  .use(function(req, res) {
    res.end('User found!');
  })
  .listen(3000);
