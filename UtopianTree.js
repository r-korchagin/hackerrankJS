"use strict";

// hackerrank question
// Utopian Tree

/**
 * 
 * @param {Number} n - number of growth cycles 
 */
function utopianTree(n) {
    let startHeight = 1;
    for (let index = 0; index < n; index++) {
        if (index%2 === 0) startHeight *= 2; 
        else startHeight++;
    }
    return startHeight;
}

console.log(utopianTree(0)); //Expected 1
console.log(utopianTree(5)); //Expected 14
console.log(utopianTree(1)); //Expected 2
console.log(utopianTree(4)); //Expected 7