"use strict";

// hackerrank question
// Strange Counter

/**
 * 
 * @param {Number} t 
 */
function strangeCounter(t) {
  let rem = BigInt(3); // jshint ignore:line
  let time = BigInt(t); // jshint ignore:line
  while (time > rem){
     time = time-rem;
     rem *= BigInt(2); // jshint ignore:line
  }
 return rem-time+BigInt(1); // jshint ignore:line
}

console.log(strangeCounter(4)); // Expected 6
console.log(strangeCounter(13)); // Expected 9