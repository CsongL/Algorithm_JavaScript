// 通过二进制来模拟各种请求的组合，然后在根据各种情况来进行模拟，从而得到最多的合理的请求的数量
/**
 * @param {number}
 * @param {number[][]} requests
 * @return {number}
 */
var maxmumRequests = function(n, requests) {
    let delta = new Array(n).fill(0);
    let ans = 0, m = requests.length;
    for(let mask = 0; mask < (1 << m); mask++) {
        let cnt = mask.toString(2).split('0').join('').length;
        if(cnt <= ans) {
            continue;
        }
        delta.fill(0);
        for(let i = 0; i < m; i++) {
            if((mask) & ( 1 << m) !== 0) {
                ++delta[requests[i][0]];
                --delta[requests[i][1]];
            }
        }
        let flag = true;
        for(let val of delta) {
            if(val != 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            ans = cnt;
        }
    }
    return ans;
}