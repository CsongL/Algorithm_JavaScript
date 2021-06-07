// 太顶了这个题， 思路真的很重要
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    let len1 = s1.length;
    let len2 = s2.length;
    let len3 = s3.length;
    if(len1 + len2 != len3) return false; 
    let dp = new Array(len1+1);
    for(let i=0; i<len1+1; i++){
        dp[i] =new Array(len2+1).fill(false);
    }
    dp[0][0] = true;
    for(let i =1; i<len2+1; i++){
        dp[0][i] = dp[0][i-1] && s2[i-1] == s3[i-1];
    }
    for(let i=1; i<len1+1; i++){
        dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1];
    }
    for(let i =1; i<len1+1; i++){
        for(let j=1; j<len2+1; j++){
            dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] ==s3[i+j-1]);
        }
    }
    return dp[len1][len2];
};