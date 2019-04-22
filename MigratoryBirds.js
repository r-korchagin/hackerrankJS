"use strict";

// hackerrank question
// Migratory Birds

/**
 * 
 * @param {Array} arr - an array of integers representing types of birds sighted
 */
function migratoryBirds(arr) {
    let hash = {};
    let maxBirds = 1, numBirds = arr[0];
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] === undefined)? 1: hash[arr[i]]+1; 
        if (hash[arr[i]] > maxBirds ||
            (hash[arr[i]] == maxBirds && arr[i] < numBirds) ){
            maxBirds = hash[arr[i]]; 
            numBirds = arr[i]; 
        }
    }
    return numBirds;
}


/**
 * Alternative solution with RegExp
 * @param {Array} arr - an array of integers representing types of birds sighted
 */
function migratoryBirds1(arr) {
    let count = 0
    let str = arr.join('')
    let re;
    [1, 2, 3, 4, 5].map(num => {
        let len = str.replace(new RegExp(`[^${num}]`, 'g'), '').length
        if (new RegExp(`${num}`).test(str) && len > count) {
            count = len
            re = num
        }
    })
    return re
}


console.log(migratoryBirds([1, 1, 2, 2, 3])) // Expected 1
console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // Expected 4
console.log(migratoryBirds([2,4,3,2,3,1,2,1,3])); // Expected 2
console.log(migratoryBirds([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // Expected 1
console.log(migratoryBirds([2, 2, 2, 2, 2, 2, 2, 2, 2, 2])); // Expected 2
console.log(migratoryBirds([3, 3, 3, 3, 3, 3, 3, 3, 3, 3])); // Expected 3
console.log(migratoryBirds([4, 4, 4, 4, 4, 4, 4, 4, 4, 4])); // Expected 4
console.log(migratoryBirds([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // Expected 5
console.log(migratoryBirds([1, 2, 3, 4, 5])); // Expected 1
console.log(migratoryBirds([5, 4, 3, 2, 1])); // Expected 1
console.log(migratoryBirds([5, 4, 3, 2, 1, 1, 2, 3, 4, 5])); // Expected 1
console.log(migratoryBirds([3, 3, 3, 3, 4, 4, 4, 4, 2, 2, 2, 2, 5, 5, 5, 5, 1, 1, 1, 1])); // Expected 1
console.log(migratoryBirds([4, 3, 5, 2, 4, 1, 1, 2, 2])); // Expected 2
console.log(migratoryBirds([5, 4, 4, 3, 2, 1, 3, 3])); // Expected 3
console.log(migratoryBirds([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,3, 3, 3, 3, 3, 3, 3, 3, 3, 3,4, 4, 4, 4, 4, 4, 4, 4, 4, 4,5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); 
// Expected 1