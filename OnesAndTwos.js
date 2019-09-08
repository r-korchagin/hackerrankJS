"use strict";

// hackerrank question
// Ones and Twos
/* global BigInt */

/**
 *
 * @param {Number} a - 1
 * @param {Number} b - 2
 */
function onesAndTwos(a, b) {
  if (b === 0) return a;
  if (a === 0 && b == 2) return 2;
  if (a === 0 && b == 1) return 1;
  let set = [],
    pow = 1;
  for (let i = 1; i < b; i++) {
    if (i < 30) pow = pow << 1;
    set.push(pow);
    // find sum, that we can append
    let sum = 1 << 1,
      k = 1;
    //while (sum < pow){ // TODO
    let maxSum = 1 << (b - i + 1);
    // console.log(sum, pow, 1<<(b-i+1));
    while (sum < pow && sum < maxSum) {
      // TODO
      // Check that count of  less than b-pow
      let onesCount = 0,
        pos = 0;
      while (sum) {
        pos++;
        if (sum & 1) onesCount += pos - 1;
        sum >>= 1;
      }
      if (onesCount <= b - i) set.push(pow + (k << 1));
      k++;
      sum = k << 1;
    }
  }
  set.push(pow << 1);
  let arr = set;
  console.log(arr);
  let dist = arr[arr.length - 1] - arr[arr.length - 2] - 1;
  if (a >= dist) return arr[arr.length - 1] + a;
  let emptySpace = 1,
    total = 1;
  for (let i = 1; i < arr.length; i++) {
    total += arr[i] - arr[i - 1] - 1;
    if (arr[i] - arr[i - 1] - 1 >= a) {
      emptySpace += a;
    } else emptySpace += arr[i] - arr[i - 1] - 1;
  }
  console.log(dist, arr.length, emptySpace, total);
  return arr[arr.length - 1] + a + emptySpace - total;
}

function onesAndTwos1(a, b) {
  if (b === 0) return a;
  if (a === 0 && b == 2) return 2;
  if (a === 0 && b == 1) return 1;
  let pow = 1,
    lastEl = 0,
    totalCount = 0;
  for (let i = 1; i < b; i++) {
    if (i < 30) pow = pow << 1;
    if (pow - lastEl > a) totalCount += a + 1;
    else totalCount += pow - lastEl;
    lastEl = pow;
    // find sum, that we can append
    let sum = 1 << 1,
      k = 1;
    let maxSum = 1 << (b - i + 1); // максимальный сдвиг
    while (sum < pow && sum < maxSum) {
      // Check that count of  less than b-i
      let onesCount = 0,
        pos = 0;
      while (sum) {
        pos++;
        if (sum & 1) onesCount += pos - 1;
        sum >>= 1;
      }
      if (onesCount <= b - i) {
        let s = pow + (k << 1);
        if (s - lastEl > a) totalCount += a + 1;
        else totalCount += s - lastEl;
        lastEl = s;
      }
      k++;
      sum = k << 1;
    }
  }
  pow = pow << 1;
  if (pow - lastEl > a) totalCount += a + 1;
  else totalCount += pow - lastEl;
  return totalCount + a;
}

function onesAndTwos2(a, b) {
  if (b === 0) return a;
  if (a === 0 && b == 2) return 2;
  if (a === 0 && b == 1) return 1;
  let pow = 1,
    lastEl = 0,
    totalCount = 0;
  for (let i = 1; i < b; i++) {
    if (i < 0) pow = pow << 1;
    else {
      // totalCount += a+1;
      totalCount++;
      let stopPoint = Math.min(i, b - i);
      for (let j = 1; j < stopPoint; j++) {
        let n = j,
          sum = i,
          ar = [i];
        while (n > 0) {
          sum += n;
          if (sum <= b) {
            ar.push(n);
            totalCount++;
            console.log("setSum", i, sum, ar);
          }
          n--;
        }
      }
      continue;
    }
    if (pow - lastEl > a) totalCount += a + 1;
    else totalCount += pow - lastEl;
    lastEl = pow;
    // find sum, that we can append
    let sum = 1 << 1,
      k = 1;
    let maxSum = 1 << (b - i + 1); // максимальный сдвиг 470?
    let sumCount = 0;
    while (sum < pow && sum < maxSum) {
      // Check that count of  less than b-i
      let onesCount = 0,
        pos = 0;
      while (sum) {
        pos++;
        if (sum & 1) onesCount += pos - 1;
        sum >>= 1;
      }
      if (onesCount <= b - i) {
        let s = pow + (k << 1);
        sumCount++; // !
        // console.log('i=',i,'k=',k,'sum=',(k<<1),'(b-i)=',(b-i),'Count=',sumCount);
        if (s - lastEl > a) totalCount += a + 1;
        else totalCount += s - lastEl;
        lastEl = s;
      }
      k++;
      sum = k << 1;
    }
  }
  pow = pow << 1;
  if (pow - lastEl > a) totalCount += a + 1;
  else totalCount += pow - lastEl;
  return totalCount + a;
}

//console.log(onesAndTwos(0,0)); // Expected 0
//console.log(onesAndTwos(2,2)); // Expected 6
//console.log(onesAndTwos(0,2)); // Expected 2
//console.log(onesAndTwos(2,0)); // Expected 2
//console.log(onesAndTwos(1,4)); // Expected 13
//console.log(onesAndTwos2(1,5)); // Expected 19   ???? 2, 2^2, 2^2+2, 2^3, 2^3+2, 2^4, 2^4+2, 2^5
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 32, 33 ] 12, 13
//console.log(onesAndTwos(2,4)); // Expected 15
//console.log(onesAndTwos(1,3)); // Expected 9
//console.log(onesAndTwos(31543754, 970)); // Expected 662254121
//console.log(onesAndTwos2(163870580, 36)); // Expected 743271187
//console.log(onesAndTwos2(25, 12)); // 341
// console.log(onesAndTwos(2, 10)); // 93
//console.log(onesAndTwos2(20, 6)); // 75
// console.log(onesAndTwos2(798948693, 28)); // 799472981

function flatRecursion(n) {
  //let arr = [];
  let arr = 0;
  for (let i = 1; i < n; i++) {
    // arr.push(i);
    arr++;
    // arr = arr.concat( r(i,i,n) );
    arr += r1(i, i, n);
    // console.log(arr);
    //console.log(r(i,i,n));
  }
  // arr.push(n);
  arr++;
  // console.log(arr.length);
  console.log(arr);
}

function r(i, sum, lim) {
  let arr = [];
  for (let k = 1; k < i; k++) {
    let ss = sum + k;
    if (ss <= lim) {
      arr.push(ss);
      arr = arr.concat(r(k, ss, lim));
    } else break;
  }
  return arr;
}

function r1(i, sum, lim) {
  //let arr = [];
  let arr = 0;
  for (let k = 1; k < i; k++) {
    let ss = sum + k;
    if (ss <= lim) {
      // arr.push(ss);
      arr++;
      //arr = arr.concat(r(k,ss,lim));
      arr += r1(k, ss, lim);
    } else break;
  }
  return arr;
}

function shift(n) {
  if (n > 31) return 0;
  return (1 << n) >>> 0;
}

// flatRecursion(846); // 541898672
flatRecursion(200);
