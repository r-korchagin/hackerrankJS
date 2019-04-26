"use strict";

// hackerrank question
// Sequence Equation

/**
 * 
 * @param {Array} p 
 */
function permutationEquation(p) {
 let resultArr = [];
 for (let i = 1; i < p.length+1; i++) {
     const element = p.indexOf(i)+1;
     resultArr.push(p.indexOf(element)+1);
 }
 return resultArr;
}

console.log(permutationEquation([5,2,1,3,4])); // Expected [4,2,5,1,3]