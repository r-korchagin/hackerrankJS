"use strict";

// hackerrank question
// Electronics Shop

/**
 * 
 * @param {Array} keyboards - list of keyboards price
 * @param {Array} drives - list of USB drivers price
 * @param {Number} b - budget
 */
function getMoneySpent(keyboards, drives, b) {
    let canSpent = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const pr = keyboards[i] + drives[j];
            if (pr>canSpent && pr<=b) canSpent = pr;
        }
    }
    return canSpent;
}

console.log(getMoneySpent([3, 1],[5, 2, 8],10)); // Expected 9
console.log(getMoneySpent([4],[5],5)); // Expected -1