"use strict";

// hackerrank question
// Angry Professor

/**
 * 
 * @param {Number} k - level of students 
 * @param {Array} a - array of students time incoming 
 */
function angryProfessor(k, a) {
  let intimeS = a.filter(el=>el<=0);
  if (k>intimeS.length) return "YES";
  return "NO";
}

console.log(angryProfessor(3,[-1, -3, 4, 2])); // Expected "YES"
console.log(angryProfessor(2,[0, -1, 2, 1])); // Expected "NO"
