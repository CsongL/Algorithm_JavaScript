// 同余定理 + 前缀和，
// 在我们碰到让求连续子数组或者子字符串是否满足某一条件时
// 通常这种问题可以通过暴力算法来求解，但是暴力算法总会超时
// 因此我们可以对暴力算法进行减枝， 前缀和就是一个很好的减枝方法，
// 通过记录前缀和可以达到减枝的作用，从而提高时间复杂度
// 因此遇到这种连续的子数组或者子字符串一定要去考虑一下前缀和方法 和其他方法结合， 看是否能够达到减枝的目的
// 这道题就是使用前缀和 + 同余定理
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    let map = new Map([[0, -1]]);
    let rem = 0;
    for(let i =0; i<nums.length; i++){
        rem = (rem+nums[i])%k; // 为什么保存的是前缀和对k取模的余数，这就用到了同余定理，如果两个数对k取模后得到的余数相同，那么这两个数的差值一定是这个k的倍数
        if(map.has(rem)){
            let pos = map.get(rem);
            if(i-pos >= 2) return true;
        }else{
            map.set(rem, i);
        }
    }
    return false;
};