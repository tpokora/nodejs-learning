/**
 * Created by Tomek on 2015-06-18.
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://Tomek:pass@ds039088.mongolab.com:39088/testdb';

// TODO: create user on mongolab

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Cannot connect to database!', err);
    } else {
        console.log('Successful connection to database.');

        // TODO: some action on database

        db.close();
    }
})
