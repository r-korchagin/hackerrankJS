"use strict";

// hackerrank question
// 2D Array - DS
// hourglassSum

function hourglassSum(arr) {
    let hourglassX = [0,0,0,1,2,2,2]; // describe x-hourglass
    let hourglassY = [0,1,2,1,0,1,2]; // describe Y-hourglass
    let maxSum = -Infinity;
    for (let x=0; x<arr.length-2; x++){
      for (let y=0; y<arr[x].length-2; y++){
        let sum = 0;
        for (let shift=0; shift<hourglassX.length; shift++){
          let shiftX = x+hourglassX[shift];
          let shiftY = y+hourglassY[shift];
          sum += arr[shiftX][shiftY];
         }
        if (maxSum < sum) maxSum = sum;
      }
    }
    return maxSum;
   }
   
   let ar0 = [[1, 1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0],
             [0, 0, 2, 4, 4, 0],
             [0, 0, 0, 2, 0, 0],
             [0, 0, 1, 2, 4, 0]];
   
   let ar1 = [[-1, -1, 0, -9, -2, -2],
             [-2, -1, -6, -8, -2, -5],
             [-1, -1, -1, -2, -3, -4],
             [-1, -9, -2, -4, -4, -5],
             [-7, -3, -3, -2, -9, -9],
             [-1, -3, -1, -2, -4, -5]];
   
    console.log(hourglassSum(ar0)); // Expected 19
    console.log(hourglassSum(ar1)); // Expected -6
