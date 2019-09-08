"use strict";

// codility question
// BinaryGap 
// Find longest sequence of zeros in binary representation of an integer.

/**
 *
 * @param {Number} N - 1
 */
function binaryGap(N) {
    if ( typeof(N) !== 'number' ) return 0;
    return Math.max(0, ...(N >>> 0)
        .toString(2)
        .split('1')
        .map(v => v.length)
        .slice(1,-1) );
}

// Scenarios:
// N = 9 (1001), Expected = 2
// N = 529 = (1000010001), Expected = 4
// N = 51272 (1100100001001000), Expected = 4
// N = 15 (1111), Expected = 0
// N = 53 (110101), Expected = 1
// N = 2147483647 (1111111111111111111111111111111), Expected = 0
// N = 2147483648 (10000000000000000000000000000000), Expected = 0
// N = 0 (0), Expected = 0
// N = -1 (null), Expected = 0
// N = "A" (null), Expected = 0
// N = null (null), Expected = 0
// N = [blank] (null), Expected = 0binaryGap(9); // 2 ✅
console.log( binaryGap(529) ); // 4 ✅
console.log( binaryGap(51272) ); // 4 ✅
console.log( binaryGap(15) ); // 0 ✅
console.log( binaryGap(53) ); // 1 ✅
console.log( binaryGap(2147483647) ); // 0 ✅
console.log( binaryGap(2147483648) ); // 0 ✅
console.log( binaryGap(0) ); // 0 ✅
console.log( binaryGap(-1) ); // 0 ✅
console.log( binaryGap("A") ); // 0 ✅
console.log( binaryGap(null) ); // 0 ✅
console.log( binaryGap() ); // 0 ✅