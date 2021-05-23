/**
 * Time: 2021/05/23
 * just like the slide window,
 * luckly the array is sorted, therefore, we can use the property to solve the problem
 * firstly, find the length of smae element in array
 * secondly, remove the duplicate element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length ==1 || nums.length ==2){
        return nums.length;
    }
    let left = 0
    while(left <= nums.length-1){
        let right = left+1;
        while(nums[left] == nums[right]){
            right++;
        }
        if(right - left >2){
            let startIndex = left+2;
            let length = right - startIndex;
            nums.splice(startIndex, length);
        }else{
            left = right;
        }       
    }
    return nums.length;
};