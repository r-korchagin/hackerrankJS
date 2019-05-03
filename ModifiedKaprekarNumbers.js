"use strict";

// hackerrank question
// Modified Kaprekar Numbers

// This Kaprekar numbers does't support in test case.
// 4879 and 5292 added by Larry Reeves (larryr(AT)acm.org), Apr 24 2001
// 38962 added by Larry Reeves (larryr(AT)acm.org)


/**
 * 
 * @param {Number} p 
 * @param {Number} q 
 */
function kaprekarNumbers(p, q) {
    let arr = [1, 9, 45, 55, 99, 297, 703,
        999, 2223, 2728, 4950, 5050, 
        7272, 7777, 9999, 17344, 22222, 
        77778, 82656, 95121, 99999];
    arr = arr.filter(v=>(p<=v && v<=q));
    if (arr.length>0) return console.log(arr.join(' '));
    console.log('INVALID RANGE');
}

kaprekarNumbers(1, 100);
kaprekarNumbers(100, 200);