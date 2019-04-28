"use strict";

// hackerrank question
// Find Digits

/**
 * 
 * @param {Number} n 
 */
function findDigits(n) {
    return n.toString()
            .split('')
            .filter((v)=>n%v==0)
            .length;
}

console.log(findDigits(24)); // Expected 2
console.log(findDigits(122)); // Expected 3