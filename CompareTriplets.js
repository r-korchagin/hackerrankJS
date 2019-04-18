"use strict";

// hackerrank question
// Compare the Triplets JS

function compareTriplets(a, b) {
    let rezult_a = a.map((v,i) => +(a[i]>b[i])).reduce((accum,el)=>accum+el);
    let rezult_b = a.map((v,i) => +(a[i]<b[i])).reduce((accum,el)=>accum+el);
	return [rezult_a, rezult_b]
}

console.log ( compareTriplets([17,28,30],[99,16,8])); // Expected [ 2, 1 ]