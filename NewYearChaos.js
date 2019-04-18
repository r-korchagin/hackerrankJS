"use strict";

// hackerrank question
// New Year Chaos
function minimumBribes(q) {

    let sum = 0;
    for (let i = 0; i < q.length; i++) {
        let v = q[i];
        let vz = 0;
        for (let indx = i; indx < Math.min(i + 15, q.length); indx++) {
            if (q[indx] < v) vz++;
        }
        if (vz > 2) return console.log("Too chaotic");
        sum += vz;
    }
    console.log(sum);
}

minimumBribes([2, 1, 5, 3, 4]); // Expected 3
minimumBribes([2, 5, 1, 3, 4]); // Expected Too chaotic
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); // Expected Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // Expected 7