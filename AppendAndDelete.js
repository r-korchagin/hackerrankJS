"use strict";


// hackerrank question
// Append and Delete

/**
 * 
 * @param {String} s 
 * @param {String} t 
 * @param {Number} k 
 */
function appendAndDelete(s, t, k) {
    let i = 0;
    while (s.charCodeAt(i) == t.charCodeAt(i)){ i++; }
    let distanse = s.length + t.length - i*2;
    if (distanse>k) return "No";
    if (k%2==distanse%2) return 'Yes';
    if ((s.length + t.length)<k) return "Yes";
    return 'No';
}

console.log(appendAndDelete('aba','aba',1)); // Expected No
console.log(appendAndDelete('ashley','ash',2)); // Expected No
console.log(appendAndDelete('hackerhappy','hackerrank',9)); // Expected Yes
