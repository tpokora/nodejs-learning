var connect = require('connect');
var cookieParser = require('cookie-parser');

// curl http://localhost:3000/ -H "Cookie: foo=bar, bar=baz"
// curl http://localhost:3000/ -H "Cookie: name=luna.da39a3ee5e6b4b0d3255bfef95601890afd80709"
// curl http://localhost:3000/ -H 'Cookie: foo=bar, bar=j:{"foo":"bar"}'
// curl http://lcoalhost:3000/ --head
connect()
  .use(cookieParser('Hello cookie world'))
  .use(function(req, res) {
    res.setHeader('Set-Cookie', 'foo=bar');
    console.log(req.cookies);
    console.log(req.signedCookies.name);
    res.end('Hello!');
  }).listen(3000);
