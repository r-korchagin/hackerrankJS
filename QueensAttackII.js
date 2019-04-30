"use strict";


// hackerrank question
// Queen's Attack II

/**
 * 
 * @param {Number} n - dimension of chessboard
 * @param {Number} k - number of obstacles
 * @param {Number} r_q - row Queen
 * @param {Number} c_q - column Queen
 * @param {Array} obstacles - array of obstacles. Each Array(2)
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
    let squares = 0;
    let LT=Math.min(n-r_q,c_q-1),
        TT=n-r_q,
        TR=Math.min(n-c_q,n-r_q),
        LL=c_q-1,
        RR=n-c_q,
        LB=Math.min(c_q-1,r_q-1),
        BB=r_q-1,
        BR=Math.min(n-c_q,r_q-1);
    if (k==0) return LT+TT+TR+LL+RR+LB+BB+BR;
    // Find nearest obstacles
    // LT  TT  TR
    // LL  QQ  RR
    // LB  BB  BR
    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i]; // [row, col]
        // vertical & horisontal
        if (obstacle[1]==c_q && obstacle[0]>r_q && obstacle[0]-r_q-1<TT) TT = obstacle[0]-r_q-1; // TT
        if (obstacle[1]==c_q && obstacle[0]<r_q && r_q-obstacle[0]-1<BB) BB = r_q-obstacle[0]-1; // BB
        if (obstacle[0]==r_q && obstacle[1]>c_q && obstacle[1]-c_q-1<RR) RR = obstacle[1]-c_q-1; // RR
        if (obstacle[0]==r_q && obstacle[1]<c_q && c_q-obstacle[1]-1<LL) LL = c_q-obstacle[1]-1; // LL
        // diagonal
        if (r_q-obstacle[0]==c_q-obstacle[1] && obstacle[0]>r_q && obstacle[0]-r_q-1<TR)
            TR = obstacle[0]-r_q-1; // TR
        if (r_q-obstacle[0]==c_q-obstacle[1] && obstacle[0]<r_q && r_q-obstacle[0]-1<LB)
            LB = r_q-obstacle[0]-1; // LB 
        if (obstacle[0]-r_q==c_q-obstacle[1] && obstacle[0]>r_q && obstacle[0]-r_q-1<LT)
            LT = obstacle[0]-r_q-1; // LT
        if (r_q-obstacle[0]==obstacle[1]-c_q && obstacle[0]<r_q && r_q-obstacle[0]-1<BR)
            BR = r_q-obstacle[0]-1; // BR
    }

    // vertical & horisontal
    squares += TT; // TT
    squares += BB; // BB
    squares += RR; // RR
    squares += LL; // LL
    // diagonal
    squares += LB; // LB
    squares += TR; // TR
    squares += LT; // LT
    squares += BR; // BR

    return squares;
}

 console.log(queensAttack(8,1,4,4,[[4,2],[5,2]])); //Expected 25
 console.log(queensAttack(4,0,4,4,[])); //Expected 9
 console.log(queensAttack(8,1,4,4,[[3,5]])); //Expected 24
 console.log(queensAttack(5,3,4,3,[[5,5],[4,2],[2,3]])); //Expected 10
 console.log(queensAttack(5,5,3,3,[[5,5],[5,1],[1,3],[1,5],[1,1]])); //Expected 11
 console.log(queensAttack(1,0,1,1,[])); //Expected 0
 console.log(queensAttack(100000,0,4187,5068,[])); //Expected 308369

