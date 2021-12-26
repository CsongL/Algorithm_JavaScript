/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    let ans = new Array();
    let arr = text.split(' ');
    let index = 0;
    while(arr.indexOf(second, index) != -1) {
        index = arr.indexOf(second, index);
        if(arr[index-1] === first && index+1 < arr.length) {
            ans.push(arr[index + 1]);
        }
        index++;
    } 
    return ans;
};