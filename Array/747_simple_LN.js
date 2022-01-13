/**
 * 判断数组中是否存在一个最大的数使得这个数比其他数的两倍还大
 * 
 * @param {number[]} nums
 * @return {number}
 */

function dominantIndex(nums) {
    let sortNums = [...nums].sort((a, b) => a - b);
    let n = sortNums.length;
    let index = nums.indexOf(sortNums[n - 1]);
    if(sortNums[n-2] * 2 > sortNums[n - 1]) {
        return -1;
    }
    return index;
}