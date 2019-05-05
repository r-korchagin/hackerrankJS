"use strict";

// hackerrank question
// Service Lane

/**
 * 
 * @param {Array} width 
 * @param {Number} n 
 * @param {Array} cases 
 */
function serviceLane(width, n, cases) {
  let result = [];
  for (let i = 0; i < cases.length; i++) {
      const cas = cases[i];
      let currWidth = width.slice(cases[i][0], cases[i][1]+1);
      result.push(Math.min(...currWidth));
  }
  return result;
}

console.log(serviceLane([2,3,1,2,3,2,3,3], 8, [[0,3],[4,6],[6,7],[3,5],[0,7]]));
// Expected
// [1,2,3,2,1]
