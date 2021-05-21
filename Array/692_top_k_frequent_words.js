/**
 * Time:2021/05/20
 * Just Like I have say if ther is a array, before we start to solve the problerm
 * We should look at that whether it can be easily solved by the sorted array
 * we should firstly conside the situation that sort the array
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    words.sort();
    let tempMap = new Map();
    for(let elem of words){
        if(tempMap.has(elem)){
            let count = tempMap.get(elem);
            tempMap.set(elem, count+1);
        } else{
            tempMap.set(elem, 1);
        }
    }
    let result = new Array();
    for(let i= 0; i<words.length; i++){
        let maxvalue = 0, maxkey ="";
        for(let [key, value] of tempMap){
            if(maxvalue < value){
                maxvalue = value;
                maxkey = key;
            }
        }
        result.push(maxkey);
        tempMap.delete(maxkey);
    }
    return result.slice(0, k);
};