/**
Time: 2021/05/05
The question is the class of dynamic_programming
Difficulty: you need to use the original array to construct another array
And use another array to calculate the result

The step of sloving DP question:
first, find the base case
second, decide which is the state
third, decide how to change the state which means that find the choice than can change the state
fourth, make sure the dp array or the arry that can record the past score
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    let max = nums[0];
    for(let value of nums){
        max = Math.max(value, max);
    }
    let sum = new Array(max+1).fill(0); // why we need to create the array?  In order to record the sum of same value, and 
    for(let value of nums){
        sum[value] +=value;
    }
    let dp = new Array(max+1);
    dp[0] = sum[0];
    dp[1] = Math.max(dp[0], sum[1]);
    for(let i =2; i <=max; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+sum(i));
    }
    return dp[max];

}