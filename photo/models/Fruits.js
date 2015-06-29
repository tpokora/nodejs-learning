var mongoose = require('mongoose');
moongoose.connect('mongodb://tomek:test@ds039088.mongolab.com:39088/testdb');

var schema = new mongoose.Schema({
  name: String,
  desc: String
});

module.exports = mongoose.model('Fruit', schema);
