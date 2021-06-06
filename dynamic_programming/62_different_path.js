// 最终所要求的结果是什么，dp数组的状态就是什么，对于最终所要求的结果的描述中包含了几个变量就是几维的dp数组
// 如何知道最终所要求的的结果描述中包好了几个变量； 去描述题目变化过程中这一个变化点的具体含义，尽量用包含变量的方式去描述
// 例如 这道求有多少条路径的问题 我们就可以这样描述： 这道题让我们去求 走到第i行第j格时 有多少条不同的路径，那么dp就是二维， 之后再用另一个方法辅助一下，先从一维开始，看能否表示我们所想要表示的内容
// 之后再去思考 dp[i][j]这一点的值 是通过什么样的选择得到的， 这一点的值都依赖于哪一点的数据，依赖于什么样的选择，做出这种选择的条件是什么 --这也就能够得到状态转义方程，或者可以我自己把他就做选择方程，根据情况做出了什么选择
// 最后考虑基本情况
// 写代码，求职
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let array = new Array(m);
    for(let i=0; i < array.length; i++){
        array[i] = new Array(n).fill(0);
        if(i == 0){
            array[i].fill(1);
        }
        array[i][0] = 1;
    }
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            array[i][j] = array[i-1][j] + array[i][j-1];
        }
    }
    return array[m-1][n-1];
};