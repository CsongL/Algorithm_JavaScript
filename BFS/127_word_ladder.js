/**
 * Time: 2021/05/15
 * This question not only use the BFS algothrim but aslo use the double-direction BFS which can impressively save the time
 * and about this question we should notice that the visited array which stores the element have been calculate
 * the position where is the "visited.push()" is differnet
 * we should put the visited.push after the get the current node
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// this is the double direction BFS
 var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) == -1){
        return 0;
    }
    let que = new Array();
    let que2 = new Array(); // the array store the quest
    let visited = new Array();
    que.push(beginWord);
    que2.push(endWord);
    visited.push(endWord);
    let step = 1;
    while(que.length != 0){
        let size = que.length;
        let temp = new Array(); // store the next result
        for(let i =0; i<size; i++){
            let curr = que.shift();
            visited.push(curr);
            if(que2.indexOf(curr) != -1){
                return step;
            }
            for(let elem of wordList){
                if(visited.indexOf(elem) != -1){
                    continue;
                }
                if(isValid(curr,elem)){
                    temp.push(elem);
                }
            }
        }
        que = que2;
        que2 = temp;
        step++;
    }
    return 0;
};

function isValid(curr, elem){
    if(curr.length != elem.length){
        return false;
    }
    let n = curr.length;
    let nDiff = 0;
    for(let i =0 ;i<n; i++){
        if(curr[i] != elem[i]){
            nDiff +=1;
        }
    }
    if(nDiff ==1){
        return true;
    }
    return false;
}

// one direction of BFS from the starts to target
var ladderLength2 = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) == -1){
        return 0;
    }
    let que = new Array();
    let visited = new Array();
    que.push(beginWord);
    let step = 1;
    while(que.length != 0){
        let size = que.length;
        for(let i =0; i<size; i++){
            let curr = que.shift();
            visited.push(curr);
            if(que2.indexOf(curr) != -1){
                return step;
            }
            for(let elem of wordList){
                if(visited.indexOf(elem) != -1){
                    continue;
                }
                if(isValid(curr,elem)){
                    que.push(elem);
                }
            }
        }
        step++;
    }
    return 0;
};