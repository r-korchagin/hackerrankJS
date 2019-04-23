"use strict";

// hackerrank question
// Picking Numbers

/**
 * 
 * @param {Array} a - array of int
 */
function pickingNumbers(a) {
  let sortArr = a.sort((a,b)=>a-b);
  let maxCount = 0, startIndex = 0, currCount = 0;
  for (let i = 0; i < sortArr.length; i++) {
      if ( Math.abs(sortArr[startIndex] - sortArr[i]) <=1 ){
        currCount = i-startIndex+1;
      } else {
        if (currCount > maxCount) maxCount = currCount;
        startIndex = i;
      }
  }
  return Math.max(maxCount, currCount);
}

console.log(pickingNumbers([1,1,2,2,4,4,5,5,5])); // Expected 5
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Expected 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Expected 5