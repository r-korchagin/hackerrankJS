"use strict";

// hackerrank question
// Lisa's Workbook

/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 * @param {Array} arr 
 */
function workbook(n, k, arr) {
    let page = 0, special = 0; 
    for (let i = 0; i < arr.length; i++) {
        page++;
        for (let j = 1; j <= arr[i]; j++) {
            if (page == j) special++;
            if (j%k == 0 && j !== arr[i]) page++;
        }
    }
    return special;
}

console.log(workbook(5,3,[4,2,6,1,10])); // Expected 4
console.log(workbook(10,5,[3,8,15,11,14,1,9,2,24,31])); // Expected 8
