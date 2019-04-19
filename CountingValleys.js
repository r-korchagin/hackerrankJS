"use strict";

// hackerrank question
// Counting Valleys

function countingValleys(n, s) {
    let vall = 0;
    let seaLev = 0;
    for (let i=0; i<n; i++){
        if (seaLev == -1 && s.charAt(i)=='U') vall++;
        seaLev = (s.charAt(i)=='U')? ++seaLev : --seaLev;
    }
    return vall;
   }
   
   console.log(countingValleys(8,"UDDDUDUU")); // Expected 1