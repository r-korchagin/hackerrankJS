"use strict";

// hackerrank question
// The Love-Letter Mystery

function theLoveLetterMystery(s) {
    let changeCount = 0;
    let len = s.length;
    for(let i=0; i<parseInt(len/2); i++){
      changeCount += Math.abs(s.charCodeAt(i) - s.charCodeAt(len-i-1));
    }
    return changeCount;
  }
  
  console.log(theLoveLetterMystery("abc")); // Expected 2
  console.log(theLoveLetterMystery("abcba")); // Expected 0
  console.log(theLoveLetterMystery("abcd")); // Expected 4