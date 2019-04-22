"use strict";

// hackerrank question
// Divisible Sum Pairs

/**
 * @param {number} n - the integer length of array 
 * @param {number} k - the integer to divide the pair sum by 
 * @param {Array} ar - an array of integers 
 */
function divisibleSumPairs(n, k, ar) {
   let count = 0;
   for (let i = 0; i < n; i++) {
       for (let j = i+1; j < n; j++) {
           if ( (ar[i]+ar[j])%k === 0 ) count++;
       }
   }
   return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // Ecpected 5
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); // Expected 3