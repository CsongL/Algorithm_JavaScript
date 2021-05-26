/**
 * Time: 2021/05/23
 * this algothrim is very classical it is not only use the left bounday method
 * but also use the right boundary methods 
 * use these two methods to solve the problem
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if(nums.length==0){
        return [-1,-1];
    }
    let leftIndex = getLeftIndex(nums, target);
    let rightIndex = getRightIndex(nums, target);
    return [leftIndex, rightIndex];
};

function getLeftIndex(nums, target){
    let left = 0, right = nums.length-1;
    while(left<=right){
        let mid = left+Number.parseInt((right -left)/2);
        if(nums[mid] == target){
            right = mid-1;
        }else if(nums[mid] < target){
            left = mid+1
        }else{
            right = mid -1
        }
    }
    if(left >=nums.length || nums[left]!=target){
        return -1;
    }
    return left;
}

function getRightIndex(nums, target){
    let left = 0, right = nums.length-1;
    while(left <= right){
        let mid = left + Number.parseInt((right-left)/2);
        if(nums[mid] == target){
            left = mid+1;
        } else if(nums[mid] >target){
            right = mid -1;
        }else{
            left = mid+1;
        }
    }
    if(nums[right] != target || right <0){
        return -1;
    }
    return right;
}