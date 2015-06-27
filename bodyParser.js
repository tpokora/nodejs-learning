var connect = require('connect');
var bodyParser = require('body-parser');

// curl -d '{"username":"test"}' -H "Content-Type: application/json" http://localhost:3000
// curl -d username=test http://localhost:3000
// curl -F image=@avg.jpg -F username=test http://localhost:4000

var app = connect()
  .use(bodyParser())
  .use(function(req, res) {
    res.end('New user registered: ' + req.body.username);
  }).listen(3000);


var app1 = connect()
  .use(bodyParser())
  .use(function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.end('Thanks!');
  }).listen(4000);
