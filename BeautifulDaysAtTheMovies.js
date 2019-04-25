"use strict";

// hackerrank question
// Beautiful Days at the Movies

/**
 * 
 * @param {Number} i - from range
 * @param {Number} j - to range
 * @param {Number} k - module
 */
function beautifulDays(i, j, k) {
    let count = 0;
    for (let g = i; g <= j; g++) {
        let rev = g.toString().split('').reverse('').join('');
        if (Math.abs(g-rev)%k == 0) count++;
    }
    return count;
}

console.log(beautifulDays(20,23,6)); // Expected 2
console.log(beautifulDays(13,45,3)); // Expected 33