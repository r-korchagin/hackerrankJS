"use strict";


// hackerrank question
// Non-Divisible Subset
// Good explanation at https://challier.github.io/home/divisible-subset/

/**
 * 
 * @param {Number} k 
 * @param {Array} S 
 */
function nonDivisibleSubset(k, S){
    let divArr = [], dict = {};
    divArr = S.map(v=>v%k);
    divArr.forEach(element => {
        if (dict[element] === undefined) dict[element]=1;
         else dict[element]++;
    });
    let count = S.length, countEq = 0;
    for (const key in dict) {
        if (dict.hasOwnProperty(key)) {
            if (k-key == key || key == 0) 
                count -= dict[key] - 1;
            else if (dict.hasOwnProperty(k-key) && dict[k-key]>dict[key])
                count -= dict[key];
            else if (dict.hasOwnProperty(k-key) && dict[k-key] == dict[key])
                countEq += dict[k-key];
        }
    }
    return count - Math.ceil(countEq/2);
}


console.log(nonDivisibleSubset(4,[1, 3, 5, 6, 7, 8, 10, 12, 15, 26, 74, 55, 235, 467])); // Expected 8
console.log(nonDivisibleSubset(3,[1,7,2,4])); // Expected 3
console.log(nonDivisibleSubset(7,[278,576,496,727,410,124,338,149,209,702,282,718,771,575,436])); // Expected 11