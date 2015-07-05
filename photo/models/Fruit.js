var mongoose = require('mongoose');
mongoose.connect('mongodb://tomek:tomek1@ds039088.mongolab.com:39088/testdb');

var schema = new mongoose.Schema({
  name: String,
  desc: String
});

module.exports = mongoose.model('Fruit', schema);
