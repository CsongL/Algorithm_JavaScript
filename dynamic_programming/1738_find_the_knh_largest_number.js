/**
 * Time:2021/05/19
 * This question is bou the XOR and realted with the dp
 * use the dp to store the value of number
 * and the reuse the number to calculate other values
 * but we should realize the feature of xor to calculate
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthLargestValue = function(matrix, k) {
    let m =matrix.length, n = matrix[0].length;
    let result = [];
    let pre = new Array(m+1).fill(0).map(a=>a = new Array(n+1).fill(0))
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            pre[i][j] = pre[i-1][j-1] ^ pre[i][j-1]^pre[i-1][j] ^matrix[i-1][j-1];
            result.push(pre[i][j]);
        }
    }
    result.sort((a,b)=>b-a);
    return result[k-1];
};