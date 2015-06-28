var connect = require('connect');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function edit(req, res, next) {
  if ('GET' != req.method) {
    return next();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<form method="POST" action="/?_method=PUT">'); // action attribute needed for working request
  res.write('<input type="hidden" name="_method" value="PUT" />')
  //res.write('<input type="text" name="user[name]" value="TEST" />');
  res.write('<input type="text" name="user" value="TEST" />');
  res.write('<input type="submit" value="Change" />');
  res.write('</form>');
  res.end();
}

function update(req, res, next) {
  if ('PUT' != req.method) {
    return next();
  }
  //res.end('Changed username too: ' + req.body.user.name); // can't access name attribute
  res.end('Changed username too: ' + req.body.user);
}

var app = connect()
  .use(logger)
  .use(bodyParser.urlencoded({ "extended": false })) // extended : false to avoid bod-parser to return depracted
  .use(methodOverride('_method'))
  .use(edit)
  .use(update);

app.listen(3000);
