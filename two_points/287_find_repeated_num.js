//  通过快 慢指针来实现， 真的是绝了
// 如果存在重复的数字在数组中，那么数组中的值肯定能够形成一个环，应为有重复的数字，所以肯定有一个值能够通过不同的方式调用到，
// 也就是说通过判断是否有环 来判断是否有重复的数字
// 再而那个环的起点就是我们重复的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let fast = 0, slow = 0
    do{
        fast = nums[nums[fast]];
        slow = nums[slow];
    }while(fast != slow);
    slow = 0;
    while(slow != fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};