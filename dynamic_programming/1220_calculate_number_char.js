/**
 * 求长度为n的由5个元音字母组成的字符串的个数 =》 以 某一个字符结尾的字符串的个数 =》 
 * 这个字符前面只能放特定的字符 =》 转态转移方程 =》dp
 * 
 * @param {number}
 * @return {number}
 *
 */

function countVowelPermutation(n) {
    const mod = Math.pow(10, 9) + 7;
    let dp = new Array(5).fill(1);
    let ndp = new Array(5).fill(0);
    for (let i = 2; i <= n; ++i) {
        /* a前面可以为e,u,i */
        ndp[0] = (dp[1] + dp[2] + dp[4]) % mod;
        /* e前面可以为a,i */
        ndp[1] = (dp[0] + dp[2]) % mod;
        /* i前面可以为e,o */
        ndp[2] = (dp[1] + dp[3]) % mod;
        /* o前面可以为i */
        ndp[3] = dp[2];
        /* u前面可以为i,o */
        ndp[4] = (dp[2] + dp[3]) % mod;
        dp.splice(0, 5, ...ndp);
    }
    let ans = 0;
    for (let i = 0; i < 5; ++i) {
        ans = (ans + dp[i]) % mod;
    }
    return ans;
}