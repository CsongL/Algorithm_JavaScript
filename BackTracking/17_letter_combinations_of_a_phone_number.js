/**
 * Time: 2021.05/15
 * backtracking algothrim is used to get all node in the decision tree
 * it is used to solve the problem that need to make choices
 * and get all these possible result of choices
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
 let result = [];
 var letterCombinations = function(digits) {
     if(digits.length == 0){
         return [];
     }
     let digitMap = new Map();
     digitMap.set('2', "abc");
     digitMap.set('3', "def");
     digitMap.set('4', "ghi");
     digitMap.set('5', 'jkl');
     digitMap.set('6', 'mno');
     digitMap.set('7', "pqrs");
     digitMap.set('8', 'tuv');
     digitMap.set('9', 'wxyz');
     result = [];
     let track = "";
     backTracking(track, 0, digitMap, digits);
     return result
 };
 
 function backTracking(track, start, digitMap, digit){
     if(track.length == digit.length){
         result.push(track);
         return;
     }
     let digitString = digitMap.get(digit[start]);
     for(let ch of digitString){
         track = track + ch;
         backTracking(track, start+1, digitMap,digit);
         track = track.slice(0, track.length-1);
     }
 }
