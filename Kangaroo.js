"use strict";

// hackerrank question
// Kangaroo

function kangaroo(x1, v1, x2, v2) {
   if ((x1<x2)&&(v1<=v2)) return "NO";
   let curr1 = x1, curr2 = x2, dist = x2-x1;
   while(Math.abs(curr2-curr1) <= Math.abs(dist)){
       dist = curr2 - curr1;
       curr1 += v1; curr2+= v2;
       if (curr1 == curr2) return "YES";    
   }
   return "NO";
}

console.log(kangaroo(0, 3, 4, 2)); // Expected YES
console.log(kangaroo(0, 5, 4, 2)); // Expected NO
console.log(kangaroo(0, 2, 5, 3)); // Expected NO
