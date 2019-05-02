"use strict";

// hackerrank question
// Bigger is Greater

/**
 * 
 * @param {String} w 
 */
function biggerIsGreater(w) {
    let i = w.length - 1;
	while (i > 0 &&  w.charCodeAt(i - 1) >= w.charCodeAt(i))
		i--;
	if (i <= 0) return 'no answer';
	
	// Find successor to pivot
	let j = w.length - 1;
	while (w.charCodeAt(j) <= w.charCodeAt(i - 1))
		j--;
    let temp = w.charAt(i - 1);
    w = w.substring(0, i - 1) + w.charAt(j) + w.substring(i);
    w = w.substring(0, j) + temp + w.substring(j+1);

	// Reverse suffix
    w = w.substring(0, i) + w.substr(i).split('').reverse().join('');

	return w;
}

console.log(biggerIsGreater('lmno')); // lmon
console.log(biggerIsGreater('dcba')); // no answer
console.log(biggerIsGreater('dcbb')); // no answer
console.log(biggerIsGreater('abdc')); // acbd
console.log(biggerIsGreater('abcd')); // abdc
console.log(biggerIsGreater('fedcbabcd')); // fedcbabdc