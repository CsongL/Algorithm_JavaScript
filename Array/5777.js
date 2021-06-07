/**
 * @param {number[]} nums
 * @return {number}
 */
 var reductionOperations = function(nums) {
    nums.sort((a,b) => a-b);
    let count =0;
    let prev = 0;
    while((euqlArray(nums, 0) + euqlArray(nums,nums[0]))!= nums.length){
        let largest = Math.max(...nums);
        let largestcount = euqlArray(nums, largest);
        let zerocount = euqlArray(nums, 0);
        count += largestcount + zerocount;
        nums= largestToZero(nums, largest);
    }
    return count;
};

function euqlArray(nums, target){
    let arry = nums.filter((elem) => elem == target);
    return arry.length;
}

function largestToZero(nums,largetst){
    return nums.map((elem) => {
        if(elem == largetst) return 0;
        else return elem;
    })
}
