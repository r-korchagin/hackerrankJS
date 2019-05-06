"use strict";

// hackerrank question
// Flatland Space Stations

/**
 * 
 * @param {Number} n - the number of cities
 * @param {Array} c - an integer array that contains the indices of cities with a space station, 1-based indexing 
 */
function flatlandSpaceStations(n, c) {
    let distArr = [];
    let lIndex = 0;
    let rIndex = (c[lIndex+1] === undefined)? lIndex: lIndex+1;
    c = c.sort((a,b)=>a-b);
    for (let i = 0; i < n; i++) {
        if (i>c[rIndex]){
           lIndex = (c[lIndex+1] === undefined)? lIndex: lIndex+1;
           rIndex = (c[lIndex+1] === undefined)? lIndex: lIndex+1;
        }
        let left = Math.abs(i-c[lIndex]);
        let right = Math.abs(i-c[rIndex]);
        distArr.push(Math.min(left,right));
    }
   return Math.max(...distArr);
}

console.log(flatlandSpaceStations(5,[0,4])); // Expected 2
console.log(flatlandSpaceStations(6,[0,1,2,3,4,5])); // Expected 0
console.log(flatlandSpaceStations(6,[0,1,2,4,3,5])); // Expected 0

