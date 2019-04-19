"use strict";

// hackerrank question
// Simple Array Sum

function simpleArraySum(ar) {
    return ar.reduce((accum, el) => accum + el);
}

console.log(simpleArraySum([1, 2, 3])); //Expected 6
console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); //Expected 31 