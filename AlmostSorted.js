"use strict";

// hackerrank question
// Almost Sorted


/**
 * 
 * @param {Array.<Number>} arr 
 */
function almostSorted(arr) {
    if (arr.length<2) return console.log('yes');
    if ( arr.every((v, i) => (i === 0 || v >= arr[i - 1])) )
        return console.log('yes');
    let start = 0, end = 0;
    for (let i = 0; i < arr.length-2; i++)
        if (arr[i]>arr[i+1]) {start = i; break;}
    for (let i = arr.length; i > start; i--)
        if (arr[i]<arr[i-1]) {end = i; break;}
    [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
    if ( arr.every((v, i) => (i === 0 || v >= arr[i - 1])) ) 
        return  console.log('yes'+'\n'+'swap '+(start+1)+' '+(end+1));
    [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
    let reverce = arr
        .slice(0,start)
        .concat(arr.slice(start,end+1).reverse())
        .concat(arr.slice(end+1,arr.length));
    if ( reverce.every((v, i) => (i === 0 || v >= reverce[i - 1])) ) 
        return console.log('yes'+'\n'+'reverse '+(start+1)+' '+(end+1));
    return console.log('no');
}


almostSorted([3,1,2]); // Expected "no"
almostSorted([4, 2]); // Expected "yes \n swap 1 2"
almostSorted([1, 5, 4, 3, 2, 6]); // Expected "yes \n reverse 2 5"
almostSorted([4104,8529,49984,54956,63034,82534,84473,86411,92941,95929,108831,894947,125082,137123,137276,142534,149840,154703,174744,180537,207563,221088,223069,231982,249517,252211,255192,260283,261543,262406,270616,274600,274709,283838,289532,295589,310856,314991,322201,339198,343271,383392,385869,389367,403468,441925,444543,454300,455366,469896,478627,479055,484516,499114,512738,543943,552836,560153,578730,579688,591631,594436,606033,613146,621500,627475,631582,643754,658309,666435,667186,671190,674741,685292,702340,705383,722375,722776,726812,748441,790023,795574,797416,813164,813248,827778,839998,843708,851728,857147,860454,861956,864994,868755,116375,911042,912634,914500,920825,979477]);
// Expected "yes \n reverse 12 95"