"use strict";

// hackerrank question
// Taum and B'day


/**
 * 
 * @param {Number} b - count black gift
 * @param {Number} w - count white gift
 * @param {Number} bc - black cost
 * @param {Number} wc - white cost
 * @param {Number} z - cost to change
 */
function taumBday(b, w, bc, wc, z) {
    let bigb=BigInt(b), bigw=BigInt(w), bigbc=BigInt(bc), bigwc=BigInt(wc), bigz=BigInt(z); // jshint ignore:line
    let costWithWChange = (bigb+bigw)*bigbc+bigw*bigz;
    let costWithBChange = (bigb+bigw)*bigwc+bigb*bigz;
    let costWithNoChange = bigb*bigbc+bigw*bigwc;
    if (costWithWChange >= costWithNoChange && costWithBChange >= costWithNoChange) 
        return costWithNoChange;
    if (costWithWChange <= costWithNoChange && costWithBChange >= costWithWChange) 
        return costWithWChange;
    if (costWithBChange <= costWithNoChange && costWithWChange >= costWithBChange) 
        return costWithBChange;
}

console.log(taumBday(10,10,1,1,1)); // Expected 20
console.log(taumBday(10,10,3,1,1)); // Expected 30
console.log(taumBday(3,5,3,4,1)); // Expected 29
console.log(taumBday(384,887,2778,6916,7794)); // Expected 7201244  