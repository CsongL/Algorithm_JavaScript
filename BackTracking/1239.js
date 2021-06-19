/**
 * @param {string[]} arr
 * @return {number}
 */
 let result = 0;
var maxLength = function(arr) {
    if(arr.length ==1) return arr[0].length;
    let target = "";
    result =0;
    backTracking(target, arr, 0);
    return result;
};

function backTracking(target, choices, start){
    result = Math.max(target.length, result);
    for(let i=start; i<choices.length; i++){
        if(!check(target, choices[i])) continue;
        let len = target.length;
        target = target + choices[i];
        backTracking(target, choices, i+1);
        target = target.substring(0, len);
    }
}
function check(target, s){
    console.log(target, s);
    if(target.indexOf(s) != -1){
        return false;
    }
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) != s.lastIndexOf(s[i])) return false;
    }
    for(let i=0; i< s.length; i++){
        if(target.indexOf(s[i]) != -1){
            return false;
        }
    }
    return true;
}