"use strict";

// hackerrank question
// Save the Prisoner

/**
 * 
 * @param {Number} n - the number of prisoners
 * @param {Number} m - the number of sweets
 * @param {Number} s - the chair number to start passing out treats at 
 */
function saveThePrisoner(n, m, s) {
        let place = s+m-1;   
        if(place>n){
            if(place%n==0){
                return n;
            }
            return place%n;
        }
         return place;
}

console.log(saveThePrisoner(5, 2, 1)); // Expected 2
console.log(saveThePrisoner(5, 2, 2)); // Expected 3
console.log(saveThePrisoner(5, 7, 5)); // Expected 1
console.log(saveThePrisoner(7, 19, 2)); // Expected 6
console.log(saveThePrisoner(3, 7, 3)); // Expected 3