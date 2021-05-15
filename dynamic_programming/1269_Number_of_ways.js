/**
 * Time:2021/05/13
 * This question can be solved by backtracking
 * can also be solved by Dynamic programming
 * so use tw different method
 */

//  BackTracking method
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
 let result = 0;
 var numWays = function(steps, arrLen) {
     let choices = new Array(3);
     choices[0] = 'stay';
     choices[1] = 'right';
     choices[2] = 'left';
     backtrack(steps, choices, arrLen, 0);
     return result;
 };
 
 function backtrack(steps, choices, arrLen, index){
     if(steps == 0 && index == 0){
         result++;
         return;
     }
     if(steps == 0) return;
     for(let i of choices){
         if(index==0 && i == 'left') continue;
         if(index == arrLen-1 && i=='right') continue;
         if(i=='stay'){
             backtrack(steps-1, choices, arrLen, index);
         }
         if(i == 'right'){
             backtrack(steps-1, choices, arrLen, index+1);
         }
         if(i == 'left') {
             backtrack(steps-1, choices, arrLen, index-1);
         }
     }
 }
console.log(numWays(27,7));
 //  This is the dp solution
 //  according the require of question 
 // due to the number is big wo we should % the modulo
 var numWays = function(steps, arrLen) {
    const MODULO = 1000000007;
    let maxColumn = Math.min(arrLen - 1, steps);
    const dp = new Array(steps + 1).fill(0).map(() => new Array(maxColumn + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxColumn; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j - 1 >= 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO;
            }
            if (j + 1 <= maxColumn) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO;
            }
        }
    }
    return dp[steps][0];
};