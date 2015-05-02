// nimble module example
// after installing "npm install nimble"

var flow = require('nimble');

flow.series([
    function(callback) {
        setTimeout(function() {
            console.log('Assigment #1');
            callback();
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Assigment #2');
            callback();
        }, 500);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Assigment #3');
            callback();
        }, 100);
    }
])