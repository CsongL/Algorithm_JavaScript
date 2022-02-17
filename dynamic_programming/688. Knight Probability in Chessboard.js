/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
 var knightProbability = function(n, k, row, column) {
    const dirs = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
    let dp = new Array(k+1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
    for(let step = 0; step <= k; step++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(step === 0) {
                    dp[step][i][j] = 1;
                } else {
                    for(let [x, y] of dirs) {
                        let ni = i + x, nj = j + y
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            dp[step][i][j] += dp[step - 1][ni][nj] / 8;
                        }
                    }
                }
            }
        }
    }
    return dp[k][row][column]
};