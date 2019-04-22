"use strict";

// hackerrank question
// Day of the Programmer

/**
 * 
 * @param {number} year 
 */
function dayOfProgrammer(year) {
 if (year === 1918) return '26.09.'+year;
 if (year%4===0 && (year < 1918 || year%400 === 0 || year%100!==0)) 
    return '12.09.'+year;
 return '13.09.'+year;
}

console.log(dayOfProgrammer(1984)); // Expected 12.09.1984
console.log(dayOfProgrammer(2017)); // Expected 13.09.2017
console.log(dayOfProgrammer(2016)); // Expected 12.09.2016