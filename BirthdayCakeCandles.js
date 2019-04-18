"use strict";

// hackerrank question
// Birthday Cake Candles

function birthdayCakeCandles(ar) {
    ar.sort((a,b) => b-a);
    let maxHeight = ar[0];
    let countCandles = ar.filter(el=>el==maxHeight).length;
    console.log(countCandles);
  }
  
  birthdayCakeCandles([3, 2, 1, 3]); // Expected 2