var express = require('express');
var router = express.Router();
var Fruit = require('../models/Fruit');

exports.form = function(req, res) {
  res.render('fruitsform', {
    title: 'Fruits'
  });
};

exports.submit = function(req, res) {
  var name = req.body.name;
  var desc = req.body.desc;

  var fruit = {
    name: name,
    desc: desc
  }

  Fruit.create(fruit);

  var html = "Fruit: " + fruit.name + "\nDesc: " + fruit.desc;
  res.send(html);
};

exports.list = function(req, res, next) {
  Fruit.find({}, function(err, fruits) {
    if (err) {
      return next(err);
    }
    res.render('fruits', {
      title: 'Fruits',
      fruits: fruits
    })
  })
};
