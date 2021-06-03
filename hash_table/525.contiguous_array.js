// 又是一道前缀和 + hashtable
//  前缀和 + hashtable 主要可以用来解决寻找某一个具备某一属性的子数组或者子字符串
// 先根据所求要求的内容，转换为可以通过计算前缀和来表示的
// 再使用hashtable来记录前缀和，如果遇到相同的前缀和那么就可以说明一定存在之前一定存在一个满足要求的子数组，
// 那么就可以返回true或者子数组的长度
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let n = nums.length;
    if(n==1) return 0;
    let sum = new Array(n);
    sum[0] = nums[0] == 1 ? 1 : -1;
    for(let i =1; i <n; i++){
        sum[i] = sum[i-1] + (nums[i] == 1 ? 1:-1);
    }
    let result = 0;
    let map = new Map([[0,0]]);
    for(let i =0; i < n; i++){
        if(!map.has(sum[i])){
            map.set(sum[i], i+1);
        }else{
            result = Math.max(result, (i+1)-map.get(sum[i]));
        }
    }
    return result;
};