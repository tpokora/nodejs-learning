var connect = require('connect');
var bodyParser = require('body-parser');
var limit = require('limit');

var app = connect()
  .use(limit('32kb'))
  .use(bodyParser())
  .listen(3000);
