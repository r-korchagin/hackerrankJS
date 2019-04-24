"use strict";

// hackerrank question
// Climbing the Leaderboard

/**
 * 
 * @param {Array} scores - Leaderboard
 * @param {Array} alice - Alice game result
 */
function climbingLeaderboard(scores, alice) {
   let aliceReverce = alice.reverse();
   let alicePlace = [], currPlace = 1, currScore = scores[0];
   let i=0, j=0;
   while ((i < aliceReverce.length) && (j < scores.length)){   
    if (aliceReverce[i] >= scores[j]){
            alicePlace[i] = currPlace;
            i++; // get next Alice result
        } else {
            // shift scores
            j++;
            if(scores[j]<currScore){ currPlace++; currScore = scores[j]; } 
        }
   }
   currPlace++;
   for (let index = i; index < aliceReverce.length; index++){
    alicePlace[index] = currPlace;
   }
   return alicePlace.reverse();
}

// Expected [ 6, 6, 4, 2, 1 ]
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[4, 5, 25, 50, 120]));
// Expected [ 6, 5, 4, 2, 1 ]
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60],[50, 65, 77, 90, 102]));