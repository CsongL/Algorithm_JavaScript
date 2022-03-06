/**
 * 
 * @param {number[]};
 * @param {number};
 * @return {number[]};
 * 
 */
const goodDaysToRobRank = function(security, time) {
    let n = security.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    for(let i = 1; i < n; i++) {
        if(left[i] <= left[i-1]) {
            left[i] = left[i-1] + 1;
        }

        if(right[n - i -1] <= right[n-i]) {
            right[n - i - 1] = right[n-i] + 1; 
        }
    }

    let ans = [];
    for(let i = time; i < n - time; i++) {
        if(left[i] >= time && right[i] >= time) {
            ans.push(i);
        }
    }
    return ans;
}
