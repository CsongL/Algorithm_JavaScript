/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let dp = new Array(n+1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for(let i=1; i<=n; i++){
        let min = Number.MAX_VALUE;
        for(let j=1;Math.pow(j,2)<=i;j++){
            min = Math.min(min, dp[i-Math.pow(j,2)]);
        }
        dp[i] = min +1;
    }
    return dp[n]
};