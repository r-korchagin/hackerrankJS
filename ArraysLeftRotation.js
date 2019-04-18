"use strict";

// hackerrank question
// Arrays: Left Rotation

// Complete the rotLeft function below.
function rotLeft(a, d) {
    for (let i=0; i<d; i++){
      let first = a[0];
      a.shift();
      a.push(first);
    }  
    return a;
  }
  
  console.log(rotLeft([1, 2, 3, 4, 5],4)); // Expect [ 5, 1, 2, 3, 4 ]