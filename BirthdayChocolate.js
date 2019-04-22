"use strict";

// hackerrank question
// Birthday Chocolate

function birthday(s, d, m) {
    let count = 0;
    if (s.length === 1 && s[0] === d) return 1;

    s.forEach((item, index) => {
        for (let i = 1; m > i || i === 1; i++) item += s[index + i];
        if (d === item) count++;
    });
    return count;
}

console.log(birthday([1, 2, 1, 3, 2],3,2)); // Expected 2
console.log(birthday([1, 1, 1, 1, 1, 1],3,2)); // Expected 0
console.log(birthday([4],4,1)); // Expected 1