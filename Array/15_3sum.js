/**
 * Time: 2021/05/013
 * should consider Duplication of data 
 * because that the solution set must not contain duplicate triplets
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums.length == 0){
        return [];
    }
    let result = [];
    let n = nums.length;
    nums.sort((a,b) => {
        return a-b;
    });
    for(let i =0; i< n-2; i++){
        if(nums[i] > 0) {
            return result;
        }
        if(i>0 && nums[i-1] == nums[i]){
            continue;
        }
        let left = i+1;
        let right = n-1;
        while(left < right){
            let add = nums[i] + nums[left] + nums[right];
            if(add == 0){
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] == nums[left+1]){
                    left++;
                }
                while(left < right && nums[right] == nums[right-1]){
                    right--;
                }
                left++;
                right--;
            }
            if(add>0){
                right--;
            }
            if(add < 0){
                left++;
            }
        }
        
    }
    return result;
}