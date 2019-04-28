"use strict";


// hackerrank question
// Cut the sticks

/**
 * 
 * @param {Array} arr 
 */
function cutTheSticks(arr) {
    let sorted = arr.sort((a,b)=>a-b);
    let resultArr = [];
    while (sorted.length > 0){
        resultArr.push(sorted.length);
        const minVal = sorted[0];
        sorted = sorted.filter(v=>v>minVal);
    }
    return resultArr;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])); // Expected [8,6,4,1]