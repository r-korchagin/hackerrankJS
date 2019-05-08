"use strict";

// hackerrank question
// Absolute Permutation

/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 */
function absolutePermutation(n, k) {
    let A = [];
    if (k===0){
        for (let i = 0; i < n; i++) A.push(i+1);
        return A;
    }
    if (n%(2*k)!==0) return [-1];
    let t = k;
    for (let i = 1; i <= n; i++) {
        A.push(i+t);
        if(i % k == 0) t = t * -1;
    }
    return A;
}

console.log(absolutePermutation(2,1)); // Expected [2,1]
console.log(absolutePermutation(6,3)); // Expected [4 5 6 1 2 3]
console.log(absolutePermutation(3,0)); // Expected [1,2,3]
console.log(absolutePermutation(3,2)); // Expected -1
console.log(absolutePermutation(100,2)); 
//  Expected
// 3 4 1 2 7 8 5 6 11 12 9 10 15 16 13 14
// 19 20 17 18 23 24 21 22 27 28 25 26 31 
// 32 29 30 35 36 33 34 39 40 37 38 43 44 
// 41 42 47 48 45 46 51 52 49 50 55 56 53 
// 54 59 60 57 58 63 64 61 62 67 68 65 66 
// 71 72 69 70 75 76 73 74 79 80 77 78 83 
// 84 81 82 87 88 85 86 91 92 89 90 95 96 
// 93 94 99 100 97 98 
