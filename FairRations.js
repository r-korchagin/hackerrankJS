"use strict";

// hackerrank question
// Fair Rations

/**
 * 
 * @param {Array} B 
 */
function fairRations(B) {
    if (B.reduce((accum,el)=>accum+el)%2!==0) return 'NO';
    let count = 0;
    for(let i = 0; i<B.length; i++){
        if(B[i] % 2 != 0){
            B[i] = B[i] + 1;
            B[i+1] = B[i+1] + 1;
            count+=2;
        }
    }
    return count;
}

console.log(fairRations([2, 3, 4, 5, 6])); //Expected 4
console.log(fairRations([1, 2])); // Expected "NO"