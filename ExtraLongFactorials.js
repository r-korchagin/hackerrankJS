"use strict";


// hackerrank question
// Extra Long Factorials


/**
 * 
 * @param {BigInt} n 
 */
function factorial(n) {
    return (n != BigInt(1)) ? n * factorial(n - BigInt(1)) : BigInt(1); // jshint ignore:line
}


// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    const result = factorial(BigInt(n)); // jshint ignore:line
    console.log(result.toString());
}



extraLongFactorials(30);