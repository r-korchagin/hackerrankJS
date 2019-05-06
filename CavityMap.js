"use strict";

// hackerrank question
// Cavity Map

/**
 * 
 * @param {Array} grid - Array of String
 */
function cavityMap(grid) {
    let cavity = [];
    for (let i = 1; i < grid.length-1; i++) {
        const t = grid[i-1].split('');
        const m = grid[i].split('');
        const b = grid[i+1].split('');
        for (let j = 1; j < m.length-1; j++) {
            if(m[j]>m[j-1] && m[j]>m[j+1] && m[j]>t[j] && m[j]>b[j] ){
                cavity.push([i,j]);    
                }            
        }
    }
    for (let k = 0; k < cavity.length; k++) {
        const c = cavity[k];
        grid[c[0]] = grid[c[0]].substring(0, c[1]) + 'X' + grid[c[0]].substring(c[1]+1);
    }
    return grid;
}

console.log(cavityMap(['1112','1912','1892','1234'])); 
// Expected ['1112','1X12','18X2','1234'] 

