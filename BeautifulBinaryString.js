"use strict";

// hackerrank question
// Beautiful Binary String

function beautifulBinaryString(b) {

    let replaceCount = 0;
    let inputStr = b;
    while (inputStr.indexOf("010") > -1){
      inputStr = inputStr.replace("010","011");
      replaceCount++;
    }
    return replaceCount;
  
  }
  console.log(beautifulBinaryString("0101010")); // Expected 2
  console.log(beautifulBinaryString("01100")); // Expected 0
  console.log(beautifulBinaryString("0100101010")); // Expected 3