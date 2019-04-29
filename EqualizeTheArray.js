"use strict";


// hackerrank question
// Equalize the Array

/**
 * 
 * @param {Array} arr 
 */
function equalizeArray(arr) {
    let dict = {}, max=0;
    arr.forEach(element => {
        if (dict[element] === undefined) dict[element]=1;
        else dict[element]++; 
        max = Math.max(max, dict[element]);
    });
    return arr.length - max;
}

console.log(equalizeArray([1,2,2,3])); // Expected 2
console.log(equalizeArray([3,3,2,1,3])); // Expected 2