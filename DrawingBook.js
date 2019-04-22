"use strict";

// hackerrank question
// Drawing Book

/**
 * 
 * @param {Number} n - pages in book 
 * @param {Number} p - page number
 */
function pageCount(n, p) {
    let page1 = Math.floor(p/2);
    let page2 = Math.floor(n/2) - page1;
    return Math.min(page1,page2);
}

console.log(pageCount(6,2)); // Expected 1
console.log(pageCount(5,4)); // Expected 0