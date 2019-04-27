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

console.log(findDigits(24)); // Ecpected 2
console.log(findDigits(122)); // Ecpected 3