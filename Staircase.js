"use strict";

// hackerrank question
// Staircase

function staircase(n) {
    for (let i=1; i<n+1; i++){
      console.log(" ".repeat(n-i)+"#".repeat(i));
    }
   
   }
   
staircase(6);
// Expected
/*
#
##
###
####
#####
######\
*/