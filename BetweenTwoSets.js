"use strict";

// hackerrank question
// Between Two Sets

  // O(n log(n)) solution.
  // 1. find the LCM (Least Common Multiple) of all the integers of array A.
  // 2. find the GCD (Greatest Common Divisor) of all the integers of array B.
  // 3. Count the number of multiples of LCM that evenly divides the GCD.


  function gcd(a,b){
    let am=Math.abs(a), bm=Math.abs(b), min=Math.min(a,b);
    for (var i=min;i>0;i--){
        if (am%i===0 && bm%i===0) return i;
    }
  }

  function lcm(a,b){
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / gcd(a,b);
  }


  function getTotalX(a, b) {

    let max_lcm = a.reduce((accum,el)=>lcm(accum,el));
    let min_gcd = b.reduce((accum,el)=>gcd(accum,el));
    
    let count = 0;
    for(let i=max_lcm; i< min_gcd+1; i+=max_lcm){
        if (min_gcd % i == 0) count++;
    }

    return count;
    }


// BF slow solution

    function getTotalX1(a, b) {
        let possMatch = [];
        let actualMatches = [];
        let counter;
      
        for (let i = 1; i <= 100; i++){
        counter = 0;
          a.forEach(ele=>{
              if (i % ele === 0){
                  counter ++;
              }
          });
          if (counter === a.length){
              possMatch.push(i);
          }
      
        }
      
        possMatch.forEach(function(ele){
          counter = 0;
          b.forEach(function(item){
              if (item % ele === 0){
                  counter ++;
              }
          });
          if (counter === b.length){
           actualMatches.push(ele);
          }
        });
      
        return actualMatches.length;
      
      }

    
    console.log(getTotalX([3, 4],[24, 48])); // Expected 2
    console.log(getTotalX1([3, 4],[24, 48])); // Expected 2