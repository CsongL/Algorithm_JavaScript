/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
 var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let total = mean * (n + m);
    let rest = total - rolls.reduce((a, b) => a + b);
    if(rest < n * 1 || rest > n * 6) {
        return [];
    }
    let quto = Math.floor(rest/n), remainder = rest % n;
    let ans = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        ans[i] = quto + (i < remainder ? 1 : 0);
    }
    return ans;
}