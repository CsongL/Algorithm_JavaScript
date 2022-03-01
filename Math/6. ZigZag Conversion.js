/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s, numRows) {
    if(s.length <= numRows || numRows <= 1) return s;
    let n = numRows - 2;
    let count = numRows + n;
    let m =s.length;
    let result = '';
    for(let i = 0; i < numRows; i++) {
        let j = i;
        let str = '';
        while(j < m) {
            str += s[j]
            if( i > 0 && i < numRows - 1) {
                let index = Math.floor(j / count);
                let secondIndex = index * count + count - i;
                if(secondIndex < m) {
                    str += s[secondIndex]; 
                }
            }
            j += count;
        }
        result += str;
    }
    return result;
}