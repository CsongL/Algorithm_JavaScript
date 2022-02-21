/**
 * @param {string} dominoes
 * @return {string}
 */

function pushDominoes(dominoes) {
    let arr = [...dominoes];
    let n = dominoes.length, i = 0;
    let Left = 'L';
    while(i < n) {
        let j = i;
        while(j < n && arr[j] === '.') {
            j++;
        }
        let Right = j < n ? arr[j] : 'R'; 
        if(Left === Right) {
            while(i < j) {
                arr[i++] = Left;
            }
        } else {
            let k = j -1;
            while(i < k) {
                arr[i++] = Left;
                arr[j--] = Right;
            }
        }
        Left = Right;
        i = j + 1;
    }
    return arr.join('');
}