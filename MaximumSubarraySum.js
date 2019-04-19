"use strict";

// hackerrank question
// Maximum Subarray Sum
// 7 from 18 test is failed due to timeout

function maximumSum(a, m) {
    let curr = 0;  
    let prefix = [];
    for (let i=0; i<a.length; i++){
        curr = (a[i]%m + curr) % m;
        prefix[i] = curr;
    }
    let ret = 0;
    
    for (let i=0; i<prefix.length; i++){
        for (let j=i-1; j>=0; j--){
            if (prefix[j] > prefix[i]){
                ret = Math.max(ret, (prefix[i] - prefix[j]+m)%m);
            }
        }
        ret = Math.max(ret, prefix[i]);
    }
    
    return ret;
   }
   
   console.log(maximumSum([3, 3, 9, 9, 5],7)); //Expected 6
   console.log(maximumSum([1, 5, 9],5)); //Expected 4

   // BF variant
   // 8 from 18 test is failed due to timeout

   function maximumSum1(a, m) {
    let curr = 0;
    let prefix = [];
    for (let i = 0; i < a.length; i++) {
        curr = (a[i] % m + curr) % m;
        prefix[i] = curr;
    }
    let ret = 0;

    for (let i = 0; i < prefix.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            ret = Math.max(ret, (prefix[i] - prefix[j] + m) % m);
        }
        ret = Math.max(ret, prefix[i]);
    }

    return ret;
}

console.log(maximumSum1([3, 3, 9, 9, 5],7)); //Expected 6
console.log(maximumSum1([1, 5, 9],5)); //Expected 4