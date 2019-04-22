"use strict";

// hackerrank question
// Breaking the Records

function breakingRecords(scores) {
    let lowest = scores[0], highest = scores[0];
    let minRec = 0, maxRec = 0;
    for (let index = 1; index < scores.length; index++) {
        const element = scores[index];
        if (scores[index] > highest){
            maxRec++; highest = scores[index];
        }
        if (scores[index] < lowest){
            minRec++; lowest = scores[index];
        }
    }
    return [maxRec,minRec];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // Epected [2,4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // Expected [4,0]

