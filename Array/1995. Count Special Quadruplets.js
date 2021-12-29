/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
    let n = nums.length;
    let ans = 0;
    const map = new Map();
    for(let c = n - 2; c >= 2; c--) {
        map[nums[c+1]] = (map[nums[c+1]] || 0) + 1;
        for(let a = 0; a < c-1; a++) {
            for(let b = a + 1; b < c; b++) {
                ans += (map[nums[a] + nums[b] + nums[c]] || 0);
            }
        }
    }
    return ans;
};