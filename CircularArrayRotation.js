"use strict";

// hackerrank question
// Circular Array Rotation

/**
 * 
 * @param {Array} a - array
 * @param {Number} k - count rotation
 * @param {Array} queries - array of queries
 */
function circularArrayRotation(a, k, queries) {
    let rot = k%a.length;
    let RequestQ = [];
    for (let i = 0; i < queries.length; i++) {
        if (queries[i] - rot >=0){
            RequestQ.push(a[queries[i]-rot]);    
        } else {
            RequestQ.push(a[queries[i]-rot + a.length]);
        }
    }
    return RequestQ;
}

console.log(circularArrayRotation([1, 2, 3],2,[0,1,2])); // Expected [2,3,1]