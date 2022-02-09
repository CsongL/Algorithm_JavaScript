/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    let res = 0, n = nums.length;
    const map = new Map();
    for(let i = 0; i < n; i++) {
        res += (map.get(nums[i] - k) || 0) + (map.get(nums[i] + k) || 0);
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    return res;
};