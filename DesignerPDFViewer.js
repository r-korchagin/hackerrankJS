"use strict";

// hackerrank question
// Designer PDF Viewer

// Complete the designerPdfViewer function below.
/**
 * 
 * @param {Array} h - array of char heigh 
 * @param {String} word 
 */
function designerPdfViewer(h, word) {
  let wordHeigh = word.split('').map(e => h[e.charCodeAt()-"a".charCodeAt()]);
  return Math.max(...wordHeigh)*word.length;
}

// Expected 9
console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"abc"));

// Expected 9
console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],"zaba"));