/**
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = function(n) {
    const code = [0];
    for(let i = 1; i <=n; i++) {
        let m = code.length;
        for(let j = m - 1; j >= 0; j--) {
            code.push(code[j] | 1 << (i - 1));
        }
    }
    return code;
};