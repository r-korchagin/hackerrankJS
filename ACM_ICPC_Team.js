"use strict";

// hackerrank question
// ACM ICPC Team

/**
 * 
 * @param {Array} topic - array of String
 */
function acmTeam(topic) {
    let maxTopic=0, maxCombination = 0;
    for (let i = 0; i < topic.length; i++) {
        const first = topic[i].split('');
        for (let j = i+1; j < topic.length; j++) {
            const second = topic[j].split('');
            let currentTopic = first.filter((v,i)=>(v=='1' || second[i]==1));
            if (currentTopic.length>maxTopic){
                maxTopic = currentTopic.length;
                maxCombination = 1; 
            }
            else if (currentTopic.length==maxTopic) maxCombination++;
        }
    }
    return [maxTopic, maxCombination];
}

console.log(acmTeam(['10101','11110','00010'])); // Expected [5,1]
console.log(acmTeam(['10101','11100','11010','00101'])); // Expected [5,2]