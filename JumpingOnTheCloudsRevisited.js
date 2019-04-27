"use strict";

// hackerrank question
// Jumping on the Clouds: Revisited

/**
 * 
 * @param {Array} c - cloud array
 * @param {Number} k - jumping energy 
 */
function jumpingOnClouds(c, k) {
    return 100 - 
        (    Math.ceil(c.length/k) +
             c.filter((v,i)=>i%k==0)
              .reduce((accum,el)=>accum+el)*2 
        );
}

console.log(jumpingOnClouds([0,0,1,0],2)); // Expected 96
console.log(jumpingOnClouds([0,0,1,0,0,1,1,0],2)); // Expected 92
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0],3)); // Expected 94