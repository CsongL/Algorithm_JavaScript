/**
 * @param {number[]} ages
 * @return {number}
 */
 var numFriendRequests = function(ages) {
    ages.sort((a, b) => a - b)
    let ans = 0;
    let n = ages.length;
    for(let i = 0, j = 0, k = 0; i < n; i++) {
        while(j < i && !check(ages[j], ages[i])) j++;
        if(k < i) k = i;
        while(k < n && check(ages[k], ages[i])) k++;
        if(k > j) ans += k - j - 1;
    }
    return ans;
};

function check(x, y) {
    if(y <= 0.5 * x + 7) return false;
    if(y > x) return false;
    if(y > 100 && x < 100) return false;
    return true;
}