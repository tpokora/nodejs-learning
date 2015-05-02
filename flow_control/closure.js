function asyncFunction(callback) {
    setTimeout(callback, 2000);
}

var color = 'blue';
console.log('Color is ' + color);

// calling async function that freezes the code for 2000 seconds
// this method is called "closure"

(function(color) {
    asyncFunction(function() {
        console.log('Color is ' + color + ' in async function');
    });
})(color);

color = 'green';
console.log('Color is ' + color);