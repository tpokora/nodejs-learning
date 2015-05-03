#!/usr/bin/env node
var string = process.argv[2];
console.log('Input string: ' + string);

function isPalindrome(string) {
    var palindrome = false;
    if (typeof string === 'undefined') {
        console.log('Incorect string');
        return false;
    }
    if (string.length < 2) {
        console.log('String to short');
        return false;
    }
    string = string.toLowerCase().replace(/ /g, "");
    var s1 = string.charAt(i);
    var s2 = string.charAt(string.length - 1);
    console.log('first: ' + s1 + ', last: ' + s2);
    if (lettersTheSame(s1, s2) && string.length < 4) {
        return true;
    } else if (lettersTheSame(s1, s2)) {
        console.log('Checking if palindrome...');
        for(var i = 1; i < (string.length / 2) + 1; i++) {
            s1 = string.charAt(i);
            s2 = string.charAt(string.length - 1 - i);
            console.log('s[' + i.toString() + ']: ' + s1 + ', s[' +
                        (string.length - 1 - i).toString() + ']: ' + s2);
            palindrome = lettersTheSame(s1, s2);
        } 
    } else {
        return false;
    }
    
    return palindrome;
}

function lettersTheSame(c1, c2) {
    if (c1 === c2) {
        return true;
    } else {
        return false;
    }
}

console.log(string + ' is palindrome? ' + isPalindrome(string));