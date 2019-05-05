"use strict";

// hackerrank question
// Chocolate Feast


/**
 * 
 * @param {Number} n - representing Bobby's initial amount of money
 * @param {Number} c - representing the cost of a chocolate bar 
 * @param {Number} m - representing the number of wrappers he can turn in for a free bar
 */
function chocolateFeast(n, c, m) {
   let countBar = Math.floor(n/c);
   let wrappers = countBar;
   while (wrappers>=m){
       let freeBar = Math.floor(wrappers/m);
       countBar += freeBar;
       wrappers -= freeBar*m;
       wrappers += freeBar;
   }
   return countBar;
}

console.log(chocolateFeast(10, 2, 5)); // Expected 6
console.log(chocolateFeast(12, 4, 4)); // Expected 3
console.log(chocolateFeast(6, 2, 2)); // Expected 5
