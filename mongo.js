/**
 * Created by Tomek on 2015-06-18.
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var insertError = 'Element exists.';
var insertOk = 'Element added.';

var findError = 'Item not found!';
var findOk = 'Item found';

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
        var doc2 = { 'hello':'doc2' };
        var listOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

        collection.insertOne(doc1,{safe:true}, function(err, result) {
            if (err) {
                console.log(insertError);
            } else {
                console.log(insertOk);
            }

        });

        collection.insertMany(listOfDocs, {safe:true}, function(err, result) {
            if (err) {
                console.log(insertError);
            } else {
                console.log(insertOk);
            }
        });

        //=======================================================

        collection.removeOne(doc1);

        var toFind = { 'hello': 'world'};
        collection.insertOne(toFind, {safe: true}, function(err, result) {
            if (err) {
                console.log(insertError);
            } else {
                collection.find().toArray(function(err, items) {
                    if (err) {
                        console.log('Error', err);
                    } else {
                        console.log('Found: ' + items.length + ' items.');
                    }
                });

                collection.findOne(toFind, function(err, item) {
                    if (err) {
                        console.log(findError);
                    } else {
                        console.log(findOk, toFind);
                    }
                });
            }
        });

        // remove all
        removeAll(collection);
    }
});

function removeAll(collection) {
    collection.find().toArray(function(err, items) {
       if (err) {
           console.log(err);
       } else {
           collection.remove({}, function(err, numberRemoved) {
               console.log('Removed ' + numberRemoved + ' documents.');
           });
       }
    });
}