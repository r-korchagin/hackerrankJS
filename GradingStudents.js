"use strict";

// hackerrank question
// Grading Students

function gradingStudents(grades) {
  return grades.map(el => {
     if (el < 38) return el;
     let r = Math.round(el/5)*5;
     if (r < el) return el;
     return r;
  });
}

console.log(gradingStudents([73,67,38,33])); // Expected [ 75, 67, 40, 33 ]