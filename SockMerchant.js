"use strict";

// hackerrank question
// Sock Merchant

function sockMerchant(n, ar) {
    let socksPair = 0;
    ar.sort((a,b) => a-b);
    // console.log(ar);
    for (let i=0; i<ar.length;){
        // console.log(i, ar[i], ar[i+1]);
        if (ar[i]==ar[i+1]){ 
            socksPair++;
            i+=2;
        } else {i++;}
    }
    return socksPair;
  }
  
  console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20, 50])); // Expected 4