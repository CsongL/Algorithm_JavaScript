//  学生出勤记录
// 用一个二位dp数组来表示在这一天之前的学生出勤记录中 Absent的次数， Late连续的天数
//  dp[0][0] 今天以及之前的记录中Absent的次数为0,连续Late的天数为0
//  第一个[0] 表示Absent的次数， 
//  第二个[0] 表示连续Late的天数
//  求获得出勤奖励的次数即Absent的次数不能大于等于2， 连续Late的天数不能超过3
var checkRecord = function(n) {
    let mod = Math.pow(10, 9) + 7;
    let dp = new Array(2);
    for(let i=0; i<dp.length; i++){
        dp[i] = new Array(3).fill(0);
    }
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[0][1] = 1;
    
    for(let i=1; i<n; i++){
        let newDp = new Array(2);
        for(let i=0; i<newDp.length; i++){
            newDp[i] = new Array(3).fill(0);
        }
        newDp[0][0] = (dp[0][0] + dp[0][1] + dp[0][2]) % mod;
        newDp[1][0] = (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][1] + dp[1][2] + dp[1][0])% mod;
        newDp[0][1] = dp[0][0] ;
        newDp[0][2] = dp[0][1];
        newDp[1][1] = dp[1][0];
        newDp[1][2] = dp[1][1];
        dp = newDp;
    }
    let ans = 0;
    for(let i=0; i<2; i++){
        for(let j=0; j<3; j++){
            ans += dp[i][j];
        }
    }
    return ans%mod;
};