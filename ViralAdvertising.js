"use strict";

// hackerrank question
// Viral Advertising

function viralAdvertising(n) {
    let currentShare = 5, currentLikes = 2, totalLikes = 2;
    for (let i = 0; i < n-1; i++) {
        currentShare = currentLikes*3;
        currentLikes = Math.floor(currentShare/2);
        totalLikes += currentLikes;
    }
    return totalLikes;
}

console.log(viralAdvertising(5)); // Expected 24
console.log(viralAdvertising(3)); // Expected 9