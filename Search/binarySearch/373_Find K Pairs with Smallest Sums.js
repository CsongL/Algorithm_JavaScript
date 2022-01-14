/**
 * 两种解法 ： 第一种 ：多路并归   和 二分
 * 多路并归 好理解 因为 数组是升序的，然后 最小的肯定是开始的两个数对的和，通过优先队列就可以不断的输出前K个最小的数组
 * 二分法 不是很好理解， 通过二分法 找到一个数对和的值（eg pariSum)，这个数对和的值会导致，比这个数对和的值小于或等于的数的个数大于等于K， 其实就是 小于等于pariSum的数的数量是大于等于K的
 * 因此，之后，我们先将小于这个数对和的数对翻入答案中，然后再将等于这个数对和的数对放入
 *  
 * 
 * @param {number[]}
 * @param {number[]}
 * @param {number}
 * @return {number[][]}
 *  
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    m = nums1.length
    n = nums2.length
    /*二分查找第 k 小的数对和的大小*/
    let left = nums1[0] + nums2[0];
    let right = nums1[m - 1] + nums2[n - 1];
    let pairSum = right;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        let cnt = 0;
        let start = 0;
        let end = n - 1;
        while (start < m && end >= 0) {
            if (nums1[start] + nums2[end] > mid) {
                end--;
            } else {
                cnt += end + 1;
                start++;
            }
        }
        if (cnt < k) {
            left = mid + 1;
        } else {
            pairSum = mid;
            right = mid - 1;
        }
    }

    const ans = [];
    let pos = n - 1;
    /*找到小于目标值 pairSum 的数对*/
    for (let i = 0; i < m; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
            pos--;
        }
        for (let j = 0; j <= pos && k > 0; j++, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[j]);
            ans.push(list);
        }
    }

    /*找到等于目标值 pairSum 的数对*/
    pos = n - 1;
    for (let i = 0; i < m && k > 0; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
            pos--;
        }
        for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum; j--, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[pos]);
            ans.push(list);
        }
    }
    return ans;
}
