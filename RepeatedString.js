"use strict";

// hackerrank question
// Repeated String

function repeatedString(s, n) {
  
    let count = s.split('').filter(val => val == 'a').length;
    let result = Math.floor(n / s.length);
    result = result * count;
    result += s.slice(0, n % s.length).split('').filter(val => val == 'a').length;
    return result;  

}

console.log(repeatedString("aba", 10)); // Expected 7