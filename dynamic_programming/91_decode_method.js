// 动态规划，
// 动态规划结题过程： 1 确定dp的维度， 首先 要求的东西就是dp数组每一格要表示的东西， 然后用带有变量的通俗话语描述出dp数组的含义，再通过这句话中有几个变量可以确定dp数组是几维的
// 2 确定baseline
// 3 确定状态转移方程，最难得部分
// 4 写出程序
/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};