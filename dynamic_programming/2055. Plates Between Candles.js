/**
 * 
 * @param {string}
 * @param {number[][]}
 * @return {number[]}
 * 
 */

var platesBetweenCandles = function(s, queries) {
    let n = s.length;
    // 记录每一个位置之前的盘子的数量
    let perSum = new Array(n).fill(0);
    for(let i = 0, sum = 0; i < n; i++) {
        if(s[i] === '*') {
            sum++;
        }
        perSum[i] = sum;
    }

    // 用 left记录每个位置左边的蜡烛位置
    let left = new Array(n).fill(-1);
    for(let i = 0, l = -1; i < n; i++) {
        if(s[i] === '|') {
            l = i;
        }
        left[i] = l;
    }
    // 用 right记录每个位置右边蜡烛的位置
    let right = new Array(n).fill(-1);
    for(let i = n - 1 , r = -1; i >= 0; i--) {
        if(s[i] === '|') {
            r = i;
        }
        right[i] = r;
    }

     let ans = new Array(queries.length).fill(0);
     for(let i = 0; i < queries.length; i++) {
         let query = queries[i];
         // 获取开始位置的右边蜡烛的位置, 也就是这个子字符串的最左边的蜡烛的位置，
         let x = right[query[0]];
         // 获取结束位置的左边蜡烛的位置，也就是这个子字符串的最右边的蜡烛的位置
         let y = left[query[1]];
         // 先判断左右是否有蜡烛，有的话，在判断是不是左右蜡烛不在这个子字符串内
         ans[i] = x === -1 || y === -1 || x >= y ? 0 : perSum[y] - perSum[x];
     }
     return ans;
};