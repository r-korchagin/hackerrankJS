"use strict";

// hackerrank question
// Happy Ladybugs

//= There are at least one empty cell and there is no Letter with count 1
//OR
//= There is no empty cell but the given string is happy

/**
 * 
 * @param {String} b 
 */
function happyLadybugs(b) {
    if (b.indexOf('_')>-1){
        let dict = {};
        b.split('').forEach(element => {
            if (dict[element] === undefined) dict[element]=1;
            else dict[element]++;
        });
        for (const key in dict){
            if (dict[key] === 1 && key !== '_') return 'NO';
        }
        return 'YES';
    } else {
        for (let i = 0; i < b.length; i++) {
            if (b.charAt(i) !== b.charAt(i-1) && b.charAt(i) !== b.charAt(i+1))
                return 'NO';
        }
        return 'YES';
    }
}

console.log(happyLadybugs('RBY_YBR')); // Expected "YES"
console.log(happyLadybugs('X_Y__X')); // Expected "NO"
console.log(happyLadybugs('__')); // Expected "YES"
console.log(happyLadybugs('B_RRBR')); // Expected "YES"
console.log(happyLadybugs('AABBC')); // Expected "NO"
console.log(happyLadybugs('BAAAB')); // Expected "NO"
console.log(happyLadybugs('AABBCC')); // Expected "YES"
console.log(happyLadybugs('AABBC_C')); // Expected "YES"
console.log(happyLadybugs('_')); // Expected "YES"
console.log(happyLadybugs('DD__FQ_QQF')); // Expected "YES"
console.log(happyLadybugs('AABCBC')); // Expected "NO"
console.log(happyLadybugs('X')); // Expected "NO"

/*
_       -> YES
X       -> NO
XX      -> YES
X_      -> NO
XY      -> NO
X_X     -> YES
XYX     -> NO
XYZ     -> NO
_XX     -> YES
YXX     -> NO
X__     -> NO
X_Y     -> NO
XXYY    -> YES
XXYZ    -> NO
XYXY    -> NO
XXXY    -> NO
XYXX    -> NO
X_XX    -> YES
X__X    -> YES
XY_X    -> NO
X___    -> NO
XYZZZ   -> NO
X_XYY   -> YES
_XY_Y   -> NO
_XX__   -> YES
_XXYY   -> YES
X_XYY   -> YES
X___X   -> YES
X__YX   -> NO
X_X_Y_  -> NO
XXXYYY  -> YES 
____ZZ  -> YES 
XYZYZY  -> NO
XXYYZZ  -> YES 
X_XYXY  -> YES (can do moves XX_YXY, XXXY_Y, XXXYY_)
XZY_YZX -> YES (can do moves XZ_YYZX, XZZYY_X, _ZZYYXX)
_XYYYXX -> YES (can do moves XXYYY_X, XX_YYYX, XXXYYY_)
    */