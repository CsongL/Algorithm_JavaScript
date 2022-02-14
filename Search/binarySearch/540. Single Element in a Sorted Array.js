/**
 * 三种方法 第一种 直接在数组里面查找  时间复杂度 O(n)
 *  第二种 通过二分法 如果是连续两个相同的 开始一定是偶数下标， 数组长度一定是奇数，如果中间下标是偶数，而与后一位相等，这说明出错的位置在后面，如果下标是奇数 与前面1为相等 这说明出错的位置在也是在后面
 *  第三种方法，出错的位数的下标一定是在偶数为，因此二分法通过查看偶数位来进行判断，如果偶数位没有错，则说明出错的在后面 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    for(let i =0; i < nums.length;) {
        if(nums[i] != nums[i+1]) return nums[i];
        else i += 2;
    }
};

functino binarySearch(nums) {
    let low = 0, high = nums.length - 1;
    while(low < high) {
        let mid = Math.floor((high - low) /2) + 1;
        if(nums[mid] === nums[mid ^ 1]) { // mid ^ 1 的作用就是 如果 mid是偶数 那么 mid ^ 1 = mid + 1, 如果mid是奇数 那么 mid ^ 1 = mid - 1;
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}

// 偶数下标查找
function binarySearchEven(nums) {
    let low = 0, high = nums.length - 1;
    while(low < high) {
        let mid = Math.floor((high - low) / 2) + low;
        mid -= mid & 1;  // 如果 mid 是偶数， mid & 1 = 0, 如果 mid 是奇数 那么 mid & 1 =1；
        if(nums[mid] === nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return nums[low];
}