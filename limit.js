var connect = require('connect');
var bodyParser = require('body-parser');
var limit = require('limit');

var app = connect()
  .use(limit)
  //.use(bodyParser.urlencoded({ "extended" : false }))
  .use(bodyParser.json())
  .listen(3000);
