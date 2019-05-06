"use strict";

// hackerrank question
// Manasa and Stones

/**
 * 
 * @param {Number} n 
 * @param {Number} a 
 * @param {Number} b 
 */
function stones(n, a, b) {
    let set = new Set();
    for (let i = 1; i < n; i++) {
        set.add(i*a+(n-i-1)*b);
    }
    set.add((n-1)*a);
    set.add((n-1)*b);
    return Array.from(set).sort((a,b)=>a-b);
}

console.log(stones(3,1,2));// Expected [2,3,4]
console.log(stones(4,10,100));// Expected [30,120,210,300]

