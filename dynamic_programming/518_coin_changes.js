//  当我们发现可以通过回溯算法来解决这个问题是，我们也要思考一下是否可以通过动态规划来解决这个问题，
//  通常来说 如果一个问题可以用回溯算法来解决，那么这个问题也可以通过动态规划来解决，
// 如果能够通过动态规划来解决这个问题，那么我们就通过动态规划来解决这个问题，因为动态规划消耗的时间较少
//  动态规划的解题思路： 确定dp数组的含义，通过简单的描述明确dp数组的维度，确定baseline, 思考状态转移方程，（dp不仅可以是一个数组，也可以是一个函数)
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

 var change = function(amount, coins) {
    let dp =new Array(amount+1).fill(0);
    dp[0] = 1;
    for(let coin of coins){
        for(let i = coin; i<=amount; i++){
            dp[i] += dp[i-coin];
        }
    }
    return dp[amount];
};