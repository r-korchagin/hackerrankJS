"use strict";

// hackerrank question
// Bon Appétit

/**
 * 
 * @param {Array} bill 
 * @param {*} k - the number of items ordered and the 0-based index of the item that Anna did not eat
 * @param {*} b - the amount of money that Brian charged Anna for her share of the bill.
 */
function bonAppetit(bill, k, b) {
   let billAnna = bill.filter((v,i)=>i!==k).reduce((accum,el)=>accum+el)/2;
   if (billAnna == b) return console.log('Bon Appetit');
   return console.log(b-billAnna);
}

bonAppetit([3, 10, 2, 9],1,12); // Expected 5
bonAppetit([3, 10, 2, 9],1,7); // Expected "Bon Appetit"