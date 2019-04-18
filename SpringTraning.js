'use strict';
/*jshint esversion: 6 */

// hackerrank question
// Complete the SprintTraining function below.

function SprintTraining(s) {
	
  let minPoint = Math.min(...s);
  let maxPoint = Math.max(...s);
  // console.log(minPoint,maxPoint);
  let max = 0;
  let countPoint = 0;
  for (let j = minPoint; j<maxPoint+1; j++){
	  let currCount = 0;
	  for (let i = 0; i<s.length-1; i++){
		let startSprint = s[i];
		let stopSprint = s[i+1];
		if ((j-startSprint)*(j-stopSprint) <= 0) currCount++;
		// console.log("start-",startSprint,stopSprint," j= ",j,"count=",currCount);
	  }
	  // console.log(j, currCount);
	  if (currCount > countPoint){
		  countPoint = currCount;
		  max = j;
	  }
  }
  
  return max;
}

console.log(SprintTraining([2,4,1,3]));  //Expected 2
console.log(SprintTraining([1,5,10,3])); //Expected 5
console.log(SprintTraining([2, 7, 3, 9, 1, 5])); //Expected 3
