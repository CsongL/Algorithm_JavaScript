// 通过贪心 来求的最长递增子序列

/**
 * 计算 数组中最长递增子序列的长度
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingLS(nums) {
    let n = nums.length, ans = 1;
    let len = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    for(let i = 0; i < n; i++){
        let t = nums[i];
        let l = 1, r = i + 1;
        while(l < r) {
            let mid = (l + r) >> 1;
            if(len[mid] >= t) r = mid;
            else l = mid + 1;
        }
        len[r] = t;
        ans = Math.max(ans, r);
    }
    return ans;
}

// 求递增子序列的长度为3的子序列是否存在
// 一种方式 是将上面的方法修改一下最后的判断，判断ans >= 3, 另一种方式是通过声明一个长度为2的数组
// 另一种方式是及其贪心的一种方式， 就是first, second，如下面的方式
function TripletLIS(nums) {
    let first = Number.MAX_SAFE_INTEGER, second = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        let t = nums[i];
        if(t < first) {
            first = t;
        }else if(t < second) {
            second = t;
        } else if(t > second) {
            return true;
        }
    }
    return false;
}


