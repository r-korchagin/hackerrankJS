"use strict";

// hackerrank question
// Ema's Supercomputer

// Possible plus size is 1, 3, 5, 7, 9, 11, 13, 15

/**
 * 
 * @param {Array.<String>} grid 
 */
function twoPluses(grid) {
    let gridArr = grid.map(v=>v.split(''));
    let plusSize = [15, 13, 11, 9, 7, 5, 3, 1];
    let validPlus = [];
    let resultArr = [];
    // find all valid pluses
    for (let size = 0; size < plusSize.length; size++) {
        const s = plusSize[size];
        if (gridArr.length < s || gridArr[0].length < s) continue;
        for (let i = 0; i <= gridArr.length - s; i++) {
            for (let j = 0; j <= gridArr[i].length-s; j++) {
                let sideLen = Math.floor(s/2);
                let plusX = i+sideLen;
                let plusY = j+sideLen;
                let correctPl = true;
                for (let x = i; x < i+s; x++) {
                    if (gridArr[x][plusY] === 'B') {correctPl = false; break;}
                }
                if (!correctPl) continue;
                for (let y = j; y < j+s; y++) {
                    if (gridArr[plusX][y] === 'B') {correctPl = false; break;}
                }
                if (correctPl){
                    let plusSet = new Set();
                    for (let x = i; x < i+s; x++) plusSet.add(''+x+plusY);
                    for (let y = j; y < j+s; y++) plusSet.add(''+plusX+y);
                    validPlus.push({'x':plusX, 'y':plusY, 'size':s, 'set':plusSet});
                }
            }
        }
    }
    
    // find pair, that do not overlap
    for (let i = 0; i < validPlus.length; i++) {
        const firstPlus = validPlus[i];
        for (let j = i+1; j < validPlus.length; j++) {
            const secondPlus = validPlus[j];
            var intersection = new Set([...firstPlus.set].filter(x => secondPlus.set.has(x)));
            if (intersection.size === 0) 
                resultArr.push((firstPlus.size*2-1)*(secondPlus.size*2-1));
        }
    }
    
    return Math.max(...resultArr);
}



console.log(twoPluses([
    'GGGGGG',
    'GBBBGB',
    'GGGGGG',
    'GGBBGB',
    'GGGGGG'
]));

// Expected 5


console.log(twoPluses([
    'BGBBGB',
    'GGGGGG',
    'BGBBGB',
    'GGGGGG',
    'BGBBGB',
    'BGBBGB'
]));

// Expected 25

console.log(twoPluses([
'GGGGGGGG',
'GBGBGGBG',
'GBGBGGBG',
'GGGGGGGG',
'GBGBGGBG',
'GGGGGGGG',
'GBGBGGBG',
'GGGGGGGG',
]));
// Expected 81

console.log(twoPluses([
'GGGGGGGGGGGG',
'GGGGGGGGGGGG',
'BGBGGGBGBGBG',
'BGBGGGBGBGBG',
'GGGGGGGGGGGG',
'GGGGGGGGGGGG',
'GGGGGGGGGGGG',
'GGGGGGGGGGGG',
'BGBGGGBGBGBG',
'BGBGGGBGBGBG',
'BGBGGGBGBGBG',
'BGBGGGBGBGBG',
'GGGGGGGGGGGG',
'GGGGGGGGGGGG'
]));
// Expected 189