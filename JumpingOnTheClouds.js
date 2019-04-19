"use strict";

// hackerrank question
// Jumping on the Clouds

function jumpingOnClouds(c) {
    let jumpCount = 0;
    for ( let i=0; i<c.length; ){
       if (c[i+1] === 0 && c[i+2] === 0) {i+=2; jumpCount++;}
       else if (c[i+1] === 1 && c[i+2] === 0) {i+=2; jumpCount++;}
       else if (c[i+1] === 0) {i++; jumpCount++;}
       else {i++;}
    }
       return jumpCount;
   }
   
   console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // Expected 4