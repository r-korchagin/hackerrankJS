"use strict";

// hackerrank question
// Halloween Sale

/**
 * 
 * @param {Number} p - start cost of game
 * @param {Number} d
 * @param {Number} m - minimum price
 * @param {Number} s - total money
 */
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let paid = 0, gameCount = 0, gameCost=p;
    while (paid+gameCost<=s){
        paid += gameCost;
        gameCount++;
        gameCost = (gameCost-d>m)? gameCost-d : m;
    }
    return gameCount;
}

console.log(howManyGames(20, 3, 6, 80)); // Expected 6
console.log(howManyGames(20, 3, 6, 85)); // Expected 7
console.log(howManyGames(99, 3, 1, 5555)); // Expected 3905
console.log(howManyGames(1, 1, 1, 9981)); // Expected 9981