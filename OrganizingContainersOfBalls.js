"use strict";

// hackerrank question
// Organizing Containers of Balls

/**
 * 
 * @param {Array} container - 2D Array
 */
function organizingContainers(container) {
    let rows=[], cols=[];
    for (let i = 0; i < container.length; i++) {
        let row=0, col=0;
        for (let j = 0; j < container[i].length; j++) {
            row += container[i][j];
            col += container[j][i];
        }
        if (row!==col) {
            rows.push(row); cols.push(col);
        }
    }
    let r = rows.filter((v,i)=>cols.indexOf(v)==-1);
    if (r.length>0) return "Impossible";
    return "Possible";
}

console.log(organizingContainers([[1,4],[2,3]])); // Expected "Impossible"
console.log(organizingContainers([[1,1],[1,1]])); // Expected "Possible"
console.log(organizingContainers([[0,2],[1,1]])); // Expected "Impossible"
console.log(organizingContainers([[1,3,1],[2,1,2],[3,3,3]])); // Expected "Impossible"
console.log(organizingContainers([[0,2,1],[1,1,1],[2,0,0]])); // Expected "Possible"