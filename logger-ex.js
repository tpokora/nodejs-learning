var connect = require('connect');
var logger = require('morgan'); // logger no more comes with Connect framework
//var logger = require('logger')

function hello(req, res) {
  res.end('Hello World!');
}

var app = connect()
  .use(logger('combined')) // with morgan
  //.use(logger.token('query-string', function(req, res) {
  //  return url.parse(req.url).query;
  //}))  ---- logger depraceted
  .use(hello)
  .listen(3000);
