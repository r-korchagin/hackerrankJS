"use strict";

// hackerrank question
// Diagonal Difference

function diagonalDifference(arr){
    let lr = arr.map((val,i)=>val[i]).reduce((accum,el)=>accum+el);
    let rl = arr.map((val,i)=>val[val.length-i-1]).reduce((accum,el)=>accum+el);
    return Math.abs(lr-rl);
  }

  console.log ( diagonalDifference([ [11,2,4],[4,5,6],[10,8,-12] ]) ); // Expected 15