/**
 * // 冒泡排序， 将最大先翻转到数组开头，然后在将其翻转到最右边，从而使得最大的一直在最右边
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    const ret = [];
    for(let n = arr.length; n > 1; n--) {
        let index = 0;
        for(let i = 1; i < n; i++) {
            index = arr[index] > arr[i] ? index : i;
        }
        if(index === n -1) continue;
        reverse(arr, index);
        reverse(arr, n-1);
        ret.push(index + 1);
        ret.push(n);
    }
    return ret;
};

function reverse(arr, end) {
    for(let i = 0, j = end; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}