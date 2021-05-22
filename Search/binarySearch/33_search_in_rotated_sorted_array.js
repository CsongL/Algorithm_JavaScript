/**
 * binary search must be applyed in the sorted array
 * but for the unsorted search, maybe we can also use the binary search
 * we should look at the features of the question
 */
function seartch(nums, target){
    let n = num.length;
    if(n==0) return -1;
    if(n==1){
        return nums[0] == target? 0:-1;
    }
    let left = 0, right = n-1;
    while(left <= right){
        let mid= (left+(right-left))/2;
        if(nums[mid] == target){
            return mid;
        }
        if(nums[0] < nums[mid]){
            if(nums[0]<=target &&target<nums[mid]){
                right = mid-1;
            }else{
                left = mid+1;
            }
        } else{
            if(nums[mid]<target && target <= nums[right]){
                left = mid +1 ;
            }else{
                right = mid-1;
            }
        }
    }
    return -1;
}