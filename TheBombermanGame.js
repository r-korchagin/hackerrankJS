"use strict";

// hackerrank question
// The Bomberman Game

/**
 * 
 * @param {Number} n 
 * @param {Array} grid 
 */
function bomberMan(n, grid) {
   // First state
   if (n === 1) return grid;
   // Even state
   if (n%2 === 0) return grid.map(v=>'O'.repeat(v.length));
   // Third state
   let blank = grid.map(v=>'O'.repeat(v.length).split(''));
   if ((n-3)%4 + 3 === 3){
      grid.forEach((v,i)=>{
          for (let j = 0; j < v.length; j++) {
              if (v.charAt(j)=='O'){
                  if (i!==0) blank[i-1][j] = '.';
                  if (i!==grid.length-1) blank[i+1][j] = '.';
                  if (j!==0) blank[i][j-1] = '.';
                  if (j!==v.length-1) blank[i][j+1] = '.';
                  blank[i][j] = '.';
              }
          }
      });
      return blank.map(v => v.join(''));
    }
    // Fifth state
    if ((n-3)%4 + 3 === 5){
        for (let k = 0; k < 2; k++) {
            blank = grid.map(v=>'O'.repeat(v.length).split(''));
            grid.forEach((v,i)=>{
                for (let j = 0; j < v.length; j++) {
                    if (v.charAt(j)=='O'){
                        if (i!==0) blank[i-1][j] = '.';
                        if (i!==grid.length-1) blank[i+1][j] = '.';
                        if (j!==0) blank[i][j-1] = '.';
                        if (j!==v.length-1) blank[i][j+1] = '.';
                        blank[i][j] = '.';
                    }
                }
            });
            grid = blank.map(v => v.join(''));
        }
        return blank.map(v => v.join(''));
    }
}
    
console.log(bomberMan(5,[
    '.......',
    '...O...',
    '....O..',
    '.......',
    'OO.....',
    'OO.....']).join("\n") + "\n");

    /*
0 sec:      1 sec:      2 sec:     3 sec:     4 sec:
.......     .......     OOOOOOO    OOO.OOO    OOOOOOO
...O...     ...O...     OOOOOOO    OO...OO    OOOOOOO
....O..     ....O..     OOOOOOO    OOO...O    OOOOOOO
.......     .......     OOOOOOO    ..OO.OO    OOOOOOO
OO.....     OO.....     OOOOOOO    ...OOOO    OOOOOOO
OO.....     OO.....     OOOOOOO    ...OOOO    OOOOOOO
    
            5 sec:      6 sec:     7 sec:     8 sec:
            .......     OOOOOOO    OOO.OOO    OOOOOOO
            ...O...     OOOOOOO    OO...OO    OOOOOOO
            ....O..     OOOOOOO    OOO...O    OOOOOOO
            .......     OOOOOOO    ..OO.OO    OOOOOOO
            OO.....     OOOOOOO    ...OOOO    OOOOOOO
            OO.....     OOOOOOO    ...OOOO    OOOOOOO    

            9 sec:      10 sec:    11 sec:    12 sec:
            .......     OOOOOOO    OOO.OOO    OOOOOOO
            ...O...     OOOOOOO    OO...OO    OOOOOOO
            ....O..     OOOOOOO    OOO...O    OOOOOOO
            .......     OOOOOOO    ..OO.OO    OOOOOOO
            OO.....     OOOOOOO    ...OOOO    OOOOOOO
            OO.....     OOOOOOO    ...OOOO    OOOOOOO
    */

console.log(bomberMan(5,[
    '.......',
    '...O.O.',
    '....O..',
    '..O....',
    'OO...OO',
    'OO.O...']).join("\n") + "\n");

    /*
 0 sec:     1 sec:      2 sec:     3 sec:     4 sec:    5 sec:    6 sec: 
.......     .......     OOOOOOO    OOO.O.O    OOOOOOO   .......   OOOOOOO
...O.O.     ...O.O.     OOOOOOO    OO.....    OOOOOOO   ...O.O.   OOOOOOO
....O..     ....O..     OOOOOOO    OO....O    OOOOOOO   ...OO..   OOOOOOO
..O....     ..O....     OOOOOOO    .......    OOOOOOO   ..OOOO.   OOOOOOO
OO...OO     OO...OO     OOOOOOO    .......    OOOOOOO   OOOOOOO   OOOOOOO
OO.O...     OO.O...     OOOOOOO    .......    OOOOOOO   OOOOOOO   OOOOOOO

.......
...O.O.
...OO..
..OOOO.
OOOOOOO
OOOOOOO
*/
