/**
 * Created by Tomek on 2015-06-18.
 */

var mongodb = requier('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://Tomek:speyside#7@ds039088.mongolab.com:39088/testdb';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Cannot connect to database!');
    } else {
        console.log('Successful connection to database.');

        // TODO: some action on database

        db.close();
    }
})