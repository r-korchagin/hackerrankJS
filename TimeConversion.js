"use strict";

// hackerrank question
// Time Conversion

function timeConversion(s) {
    let ampm = s.substr(8, 2);
    let time = s.substr(0, 8).split(":");
    if (ampm == "AM") time[0] = (time[0]==12)? '00': time[0];
    if (ampm == "PM") time[0] = (time[0]==12)? '12': +time[0]+12;
    return time.join(":");
}

console.log(timeConversion("07:05:45PM")); // Expected 19:05:45
console.log(timeConversion("01:05:45AM")); // Expected 01:05:45
console.log(timeConversion("12:00:00AM")); // Expected 00:00:00
console.log(timeConversion("02:01:00AM")); // Expected 02:01:00
console.log(timeConversion("12:00:00PM")); // Expected 12:00:00