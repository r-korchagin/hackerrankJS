"use strict";

// hackerrank question
// The Hurdle Race


/**
 * 
 * @param {Number} k - maximum height Dan can jump naturally 
 * @param {Array} height - array of hurdle heights 
 */
function hurdleRace(k, height) {
   let maxheight = Math.max(...height) - k;
   if (maxheight < 0) return 0;
   return maxheight;
}

console.log(hurdleRace(1,[1,2,3,3,2])); // Expected 2
console.log(hurdleRace(4,[1, 6, 3, 5, 2])); // Expected 2
