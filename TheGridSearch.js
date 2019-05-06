"use strict";

// hackerrank question
// The Grid Search

/**
 * 
 * @param {Array.<String>} G - Array of String
 * @param {Array.<String>} P - Array of String
 */
function gridSearch(G, P) {
    for (let k = 0; k <= G.length-P.length; k++) {
        for (let i = 0; i <= G[0].length-P[0].length; i++) {
            let find = true;
            for (let j = 0; j < P.length; j++) {
                find &= P[j] == G[k+j].substr(i,P[0].length);
                if (!find) break;
            }
            if (find) return 'YES';
        }
    }
    return 'NO';
}

console.log(gridSearch(['1234567890','0987654321','1111111111','1111111111','2222222222'],
    ['876543','111111','111111']));
    // Expected 'YES';