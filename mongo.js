/**
 * Created by Tomek on 2015-06-18.
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://tomek:tomek1@ds039088.mongolab.com:39088/testdb';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Cannot connect to database!', err);
    } else {
        console.log('Successful connection to database.');

        db.createCollection('testCollection', {strict:true}, function(err, collection) {
            if (err) {
                console.log('Error: testCollection already exists');
            } else {
                console.log('Created testCollection.');
            }
        });

        var collection = db.collection('testCollection');
        var doc1 = { 'hello':'doc1' };
        var listOfDocs = [{'hello':'doc3'}, {'hello':'doc3'}];

        collection.insertOne(doc1, function(err, result) {
            if (err) {
                console.log('Element already exists.');
            } else {
                console.log('Element added.');
            }

        });
        collection.insertOne(listOfDocs, function(err, result) {
            if (err) {
                console.log('Element already exists.');
            } else {
                console.log('Element added.');
            }
        });

        //=======================================================

        
    }
});