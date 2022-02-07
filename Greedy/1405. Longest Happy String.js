/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
 var longestDiverseString = function(a, b, c) {
    let res = [];
    let arr = [[a, 'a'], [b, 'b'], [c, 'c']];
    while(true) {
        arr.sort((a, b) => b[0] - a[0]);
        let hasNext = false;
        for(let [i, [num, ch]] of arr.entries()) {
            if(num <= 0) {
                break;
            }
            const len = res.length;
            if(len >= 2 && res[len-1] === ch && res[len-2] === ch) {
                continue;
            }
            hasNext = true;
            res.push(ch);
            arr[i][0]--;
            break;
        }
        if(!hasNext) {
            break;
        }
    }
    return res.join('')
};