"use strict";

// hackerrank question
// Apple and Orange

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple=0, orange=0;
    // count apple
    apples.forEach(element => {
        if ((a+element-s)*(a+element-t) <= 0) apple++;
    });
    oranges.forEach(element => {
        if ((b+element-s)*(b+element-t) <= 0) orange++; 
    });
    console.log(apple);
    console.log(orange);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]); // Expected 1,2