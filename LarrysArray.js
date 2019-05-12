"use strict";

// hackerrank question
// Larry's Array


/**
 * 
 * @param {Array.<Number>} A 
 */
function larrysArray(A) {
    if ( A.every((v, i) => (i === 0 || v >= A[i - 1])) ) return "YES";
    for (let i = 1; i <= A.length; ++i) {
        for (let i = 0; i <= A.length-3; ++i) {
            if (A[i+2] < A[i] && A[i] < A[i+1]) {
                [ A[i], A[i+2] ] = [ A[i+2], A[i] ];
                [ A[i+1], A[i+2] ] = [ A[i+2], A[i+1] ];
            } else if (A[i+1] < A[i] && A[i] < A[i+2]) {
                [ A[i], A[i+1] ] = [ A[i+1], A[i] ];
                [ A[i+1], A[i+2] ] = [ A[i+2], A[i+1] ];
            } else if (A[i] > A[i+1] && A[i+1] > A[i+2]) {
                [ A[i], A[i+2] ] = [ A[i+2], A[i] ];
                [ A[i], A[i+1] ] = [ A[i+1], A[i] ];
            } else if (A[i] > A[i+2] && A[i+2] > A[i+1]) {
                [ A[i], A[i+1] ] = [ A[i+1], A[i] ];
                [ A[i+1], A[i+2] ] = [ A[i+2], A[i+1] ];
            }
        }
    }
    if ( A.every((v, i) => (i === 0 || v >= A[i - 1])) ) return "YES";
    return "NO";
}

console.log(larrysArray([3, 1, 2])); // Expected "YES"
console.log(larrysArray([1, 3, 4, 2])); // Expected "YES"
console.log(larrysArray([1, 2, 3, 5, 4])); // Expected "NO"
console.log(larrysArray([1, 2, 3, 4, 5])); // Expected "YES"
