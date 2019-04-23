"use strict";

// hackerrank question
// Forming a Magic Square

/**
 * 
 * @param {Array} s - 2D array 3x3 
 */
function formingMagicSquare(s) {
    // Has only 8 variants of magic square 3x3
    let m1 = [[8,1,6],[3,5,7],[4,9,2]];
    let m2 = [[6,7,2],[1,5,9],[8,3,4]];
    let m3 = [[2,9,4],[7,5,3],[6,1,8]];
    let m4 = [[4,3,8],[9,5,1],[2,7,6]];
    let m5 = [[6,1,8],[7,5,3],[2,9,4]];
    let m6 = [[2,7,6],[9,5,1],[4,3,8]];
    let m7 = [[4,9,2],[3,5,7],[8,1,6]];
    let m8 = [[8,3,4],[1,5,9],[6,7,2]];
    let diff1 = 0, diff2 = 0, diff3 = 0, diff4 = 0;
    let diff5 = 0, diff6 = 0, diff7 = 0, diff8 = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            diff1 += Math.abs( m1[i][j] - s[i][j] );
            diff2 += Math.abs( m2[i][j] - s[i][j] );
            diff3 += Math.abs( m3[i][j] - s[i][j] );
            diff4 += Math.abs( m4[i][j] - s[i][j] );
            diff5 += Math.abs( m5[i][j] - s[i][j] );
            diff6 += Math.abs( m6[i][j] - s[i][j] );
            diff7 += Math.abs( m7[i][j] - s[i][j] );
            diff8 += Math.abs( m8[i][j] - s[i][j] );
        }
    }
    return Math.min(diff1,diff2,diff3,diff4,diff5,diff6,diff7,diff8);
}

console.log(formingMagicSquare([[5,3,4],[1,5,8],[6,4,2]])); // Expected 7
console.log(formingMagicSquare([[4,9,2],[3,5,7],[8,1,5]])); // Expected 1
console.log(formingMagicSquare([[4,8,2],[4,5,7],[6,1,6]])); // Expected 4
