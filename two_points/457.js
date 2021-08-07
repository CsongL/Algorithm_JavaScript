/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function(nums) {
    let n = nums.length;
    let flag = true;
    for(let i =0; i<nums.length; i++){
        flag = true;
        let fast = i, low = i;
        do{
            fast = next(nums, fast);
            fast = next(nums, fast);
            low =  next(nums, low);
        }while(fast != low)
        low = next(nums, low);
         if(low == fast)  flag = false;
        for(;low != fast;){
            if(nums[low] * nums[fast] < 0) flag = false;
            low = next(nums, low);
        }
        if(flag == true) return true;
    }
    return false;
};

const next = (nums, cur) => {
    const n = nums.length;
    return ((cur + nums[cur]) % n + n) % n; // 保证返回值在 [0,n) 中
}