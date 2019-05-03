"use strict";

// hackerrank question
// Minimum Distances

/**
 * 
 * @param {Array} a 
 */
function minimumDistances(a) {
    let minDist = Infinity, eq = true;
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i]==a[j]&& j-i<minDist)
                minDist = j-i;
        }        
    }
    if (minDist==Infinity) return -1;
    return minDist;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7])); // Expected 3
console.log(minimumDistances([1, 1, 1, 1, 1, 1])); // Expected -1
console.log(minimumDistances([1, 2, 3, 4, 10])); // Expected -1