"use strict";

// hackerrank question
// Cats and a Mouse

/**
 * 
 * @param {Number} x - Cat A's position 
 * @param {Number} y - Cat B's position
 * @param {Number} z - Mouse C's position 
 */
function catAndMouse(x, y, z) {
   let catADirection = (x<z)? 1: -1;
   let catBDirection = (y<z)? 1: -1;
   let currA = x, currB = y;
   while (currA !==z && currB !==z){
       currA = currA + catADirection;
       currB = currB + catBDirection;
   }
   if (currA == z && currB == z) return "Mouse C";
   if (currA == z) return "Cat A";
   if (currB == z) return "Cat B";
}

console.log(catAndMouse(1,2,3)); // Expected "Cat B"
console.log(catAndMouse(1,3,2)); // Expected "Mouse C"