var express = require('express');
var router = express.Router();

var viewMainPage = {
  title: 'View Title',
  bigText: 'Hello World!',
  desc: 'This is my first view! :)'
  };

router.get('/', function(req, res, next) {
  res.render('myView', viewMainPage);
});

router.get('/test', function(req, res, next) {
  res.send('Test routing with res.send(). <a href="/myroute">Back</a>')
})

module.exports = router;
