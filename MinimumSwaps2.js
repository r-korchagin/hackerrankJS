"use strict";

// hackerrank question
// Minimum Swaps 2

function minimumSwaps(arr) {
    let swap = 0;
    let origArray = arr.slice(0); 
    let sortedArray = arr.sort((a,b) => a - b);
    
    for(var i = 0; i < origArray.length; i++) {
        if (origArray[i] != sortedArray[i]) {
            for (var j = i+1; j < origArray.length; j++) {
                if(origArray[j] === sortedArray[i]) {
                    [origArray[i],origArray[j]] = [origArray[j],origArray[i]];
                    swap++;
                    break;
                }
            }
        }
    }
    return swap;
    }

    console.log(minimumSwaps([4, 3, 1, 2])); //Expected 3
    console.log(minimumSwaps([2, 3, 4, 1, 5])); //Expected 3
    console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));//Expected 3