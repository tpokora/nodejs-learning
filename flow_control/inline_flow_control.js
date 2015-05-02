#!/usr/bin/env node

setTimeout(function() {
    console.log('Assigment #1');
    setTimeout(function() {
        console.log('Assigment #2');
        setTimeout(function() {
            console.log('Assigment #3');
        }, 100);
    }, 500);
}, 1000);