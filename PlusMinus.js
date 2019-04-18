"use strict";

// hackerrank question
// Plus Minus

function roundSix(r) { 
    return Math.round(r * 1000000) / 1000000;
}

function plusMinus(arr) {
    let plus = arr.filter((val) => +(val > 0)).length / arr.length;
    console.log(roundSix(plus));
    let minus = arr.filter((val) => +(val < 0)).length / arr.length;
    console.log(roundSix(minus));
    let zero = arr.filter((val) => +(val == 0)).length / arr.length;
    console.log(roundSix(zero));
}

plusMinus([-4, 3, -9, 0, 4, 1]); 
// Expected:
// 0.5
// 0.333333
// 0.166667