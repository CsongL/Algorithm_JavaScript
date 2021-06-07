/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    if(strs.length == 1) return [strs];
    let sortedStrs = strs.map((str) => {
    let strArray = str.split("");
    strArray.sort();
    return strArray.join("");
    });
    let map = new Map();
    for(let i=0; i< sortedStrs.length;i++){
        if(!map.has(sortedStrs[i])){
            let arr = new Array();
            arr.push(strs[i]);
            map.set(sortedStrs[i], arr);
        } else {
            let arr = map.get(sortedStrs[i]);
            arr.push(strs[i]);
            map.set(sortedStrs[i], arr);
        }
    }
    let result = new Array();
    for(let value of map.values()){
        result.push(value);
    }
    return result;
};