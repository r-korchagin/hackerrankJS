"use strict";


// hackerrank question
// Sherlock and Squares

function squares(a, b) {
    let countSquares = 0;
    for (let i = Math.ceil(Math.sqrt(a)); i <= Math.ceil(Math.sqrt(b)); i++) {
        const sqr = Math.pow(i,2);
        if ((sqr-a)*(sqr-b) <= 0) countSquares++;
    }
    return countSquares;
}

console.log(squares(3,9)); // Expected 2