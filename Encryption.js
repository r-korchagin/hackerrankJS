"use strict";

// hackerrank question
// Encryption


/**
 * 
 * @param {String} s
 */
function encryption(s) {
    let str = s.replace(/\s/g, '');
    let colSize = Math.ceil(Math.sqrt(str.length));
    let resultString = '';
    for (let i = 0; i < colSize; i++) {
        for (let j = i; j < str.length;j+=colSize) {
            resultString += str.charAt(j);
        }
        resultString += ' ';
    }
    return resultString.trim();
}

console.log(encryption('if man was meant to stay on the ground god would have given us roots'));
// Expected 
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
console.log(encryption('haveaniceday')); // Expected 'hae and via ecy'
console.log(encryption('feedthedog')); // Expected 'fto ehg ee dd'
console.log(encryption('chillout')); // Expected 'clu hlt io'
console.log(encryption('bgwdyygtmwhtwhusfedckrgybozfjaukgsngqvzftiypqukxypbkghjiwkphkjtsdizueaz'));
// Expected 
// bwdfqujs ghcjvkid wtkazxwi dwrufykz yhgktppu yuygibhe gsbsykka tfonpgjz mezgqht