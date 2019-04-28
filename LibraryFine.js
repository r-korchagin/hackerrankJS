"use strict";


// hackerrank question
// Library Fine

/**
 * 
 * @param {Number} d1 - day1 
 * @param {Number} m1 - month1
 * @param {Number} y1 - year1
 * @param {Number} d2 - day2
 * @param {Number} m2 - month2
 * @param {Number} y2 - year2
 */
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (d1<=d2 && m1<=m2 && y1<=y2) return 0;
    if (d1>d2 && m1==m2 && y1==y2) return (d1-d2)*15;
    if (m1>m2 && y1==y2) return (m1-m2)*500;
    if (y1>y2) return 10000;
    return 0;
}

console.log(libraryFine(9,6,2015,6,6,2015)); // Expected 45