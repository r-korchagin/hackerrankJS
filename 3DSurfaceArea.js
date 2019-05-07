"use strict";

// hackerrank question
// 3D Surface Area

/**
 * 
 * @param {Array} A 
 */
function surfaceArea(A) {
    let surface = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            // bottom
            surface += 1;
            // top
            surface += 1;
            // left
            if (j==0) surface += A[i][j];
            else surface += (A[i][j]-A[i][j-1]>=0)? A[i][j]-A[i][j-1] : 0;
            // right
            if (j==A[i].length-1) surface += A[i][j];
            else surface += (A[i][j]-A[i][j+1]>=0)? A[i][j]-A[i][j+1] : 0;
            // front
            if (i==0) surface += A[i][j];
            else surface += (A[i][j]-A[i-1][j]>=0)? A[i][j]-A[i-1][j] : 0;
            // end
            if (i==A.length-1) surface += A[i][j];
            else surface += (A[i][j]-A[i+1][j]>=0)? A[i][j]-A[i+1][j] : 0;
        }
    }
    return surface;
}

 console.log(surfaceArea([[1]])); // Expected 6
 console.log(surfaceArea([[1,3,4],[2,2,3],[1,2,4]])); // Expected 60
