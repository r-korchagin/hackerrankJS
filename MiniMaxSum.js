"use strict";

// hackerrank question
// Mini-Max Sum

function miniMaxSum(arr) {
    let max = 0;
    let min = arr.reduce((accum,el)=>accum+el);
    arr.forEach((el,i)=>{
      let sum = arr.filter((v,k)=>i!=k).reduce((accum,el)=>accum+el);
      if (min>sum) min = sum;
      if (max<sum) max = sum;
    });
    console.log([min,max].join(" "));
  }

  miniMaxSum([1,2,3,4,5]); // Expected 10 14