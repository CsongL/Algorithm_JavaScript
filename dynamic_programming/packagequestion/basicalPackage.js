// 最基本的背包问题： 背包问题 主要的两个状态在于 背包容量 与 物品的价值
// 背包的容量 决定了能否放入新的物品
// 物品的价值 决定了背包所能装的价值的大小
// 因此 是一个二维dp数组， 但是dp数组的含义是 在前i个物品中当背包的容量为j是所能装载的最大价值
// 初始状态是什么？   =>  初始状态就是 当背包所能装的重量是0时， 那么就什么都不能装下,不论是前几个都是dp[...][0] = 0; 还有就是当我们所指的是前0个物品时， 那么dp[0][...] = 0;
// 状态转义是什么？ => 背包问题本质就是要不要把这个东西放入背包中，那么状态转移就是 放不放入当前的物体， 不放入 那么dp[i][w] = dp[i-1][w]  放入   dp[i][w] = dp[i-1][w - wt[i-1]] 注意 w - wt[i-1] < 0 所导致的数组越界情况
// 最终的结果就是位于 数组的最后


/**
 * 
 * @param {Number} n 
 * @param {Number} w 
 * @param {Number[]} wt 
 * @param {Number[]} val
 * @return {Number}
 * @public 
 */
function basicPackage(n, w, wt, val) {
    let dp = new Array(n+1).map(() => new Array(w + 1).fill(0));
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= w; j++) {
            if(j - wt[i-1] < 0) {
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j - wt[i-1]]);
            }
        }
    }
    return dp[n][w];
}