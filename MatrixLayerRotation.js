"use strict";

// hackerrank question
// Matrix Layer Rotation

/**
 * 
 * @param {Array.<Array>} matrix 
 * @param {Number} r 
 */
function matrixRotation(matrix, r) {
  let  lay= Math.min(matrix.length,matrix[0].length)/2;
  let lineArr = [], m = matrix.length, n = matrix[0].length;
  // transfer 2D to line arr
  for (let i = 0; i < lay; i++) {
      let top = matrix.splice(0,1)[0];
      let bottom =  matrix.splice(matrix.length-1,1)[0].reverse();
      let left  = [];
      for (let j = 0; j < matrix.length; j++) {
        top.push(matrix[j][matrix[j].length-1]);
        left.push(matrix[j][0]);
        matrix[j] = matrix[j].slice(1,matrix[j].length-1);
      }
      let line = top.concat(bottom).concat(left.reverse());
      lineArr.push(line);
  }
  // rotation
  for (let i = 0; i < lineArr.length; i++) {
      let line = lineArr[i];
      let rot = r%line.length;
      let rotLine = [];
      for (let i = 0; i < line.length; i++) {
        if (i + rot < line.length ){
            rotLine.push(line[i+rot]);    
        } else {
            rotLine.push(line[i+rot - line.length]);
        }
     }
     lineArr[i] = rotLine;
  }
  
  let resArr = [];
  // transfer 2D to line arr
  for (let i = lay-1; i >= 0; i--) {
    let top = lineArr[i].splice(0,n-i*2);
    let r = lineArr[i].splice(0,m-i*2-2);
    let bottom = lineArr[i].splice(0,n-i*2).reverse();
    let l = lineArr[i].splice(0).reverse();
    for (let j = 0; j < r.length; j++) {
      let inLine = (resArr[j] === undefined)? []:resArr[j];
      resArr[j] = [l[j]].concat(inLine).concat(r[j]);
    }
    resArr.push(bottom);
    resArr.unshift(top);
  }
  resArr.forEach(el => {
    console.log(el.join(' '));
  });
}


matrixRotation([
    [1, 2,  3,  4],
    [5, 6,  7,  8],
    [9, 10, 11, 12],
    [13,14, 15, 16]
],2);
// Expected
/*3 4  8  12
  2 11 10 16
  1 7  6  15
  5 9  13 14*/
 
matrixRotation([
  [1, 2, 3, 4],
  [7, 8, 9, 10],
  [13, 14, 15, 16],
  [19, 20, 21, 22],
  [25, 26, 27, 28]
],7);
/*
28 27 26 25
22 9 15 19
16 8 21 13
10 14 20 7
4 3 2 1
*/