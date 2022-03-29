/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let ans = 0;
    let n = nums.length;
    for(let left = 0, right = 0, sum = 0; right < n; right++) {
        sum += nums[right] !== 1 ? 1 : 0;
        while(sum > k) {
            sum -= nums[left++] !== 1 ? 1 : 0 
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};