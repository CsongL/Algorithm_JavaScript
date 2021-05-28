/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    if(nums.length == 1 && nums[0]!=target){
        return false;
    }
    let index =0;
    let n = nums.length;
    for(; index<n;){
        if(nums[index] > nums[index+1]){
            break;
        }else{
            index++;
        }
    }
    let tempNums = nums.slice(0, index+1);
    let newNums = nums.slice(index+1);
    newNums.push(...tempNums);
    let left =0, right =newNums.length-1;
    while(left <= right){
        let mid = left + parseInt((right -left)/2);
        if(newNums[mid] == target){
            return true;
        }else if(newNums[mid] > target){
            right = mid -1;
        }else if(newNums[mid] < target){
            left = mid+1;
        }
    }
    return false;
};