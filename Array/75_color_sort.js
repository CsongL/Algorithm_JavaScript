/**
 * the question of array sort 
 * for example, if there is n differrent element in the array,
 * If we can successfully sort the  n-1 element, the rest of element will be sortef too,
 * for this question, why i can not get the solution, I think maybe I should fo more questions
 * 
 *  
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let n = nums.length;
    let p0 = 0, p1=n-1;
    for(let i =0; i<=p1; i++){
        while(i<=p1&&nums[i] == 2){
            let temp = nums[i];
            nums[i] = nums[p1];
            nums[p1] = temp;
            p1--;
        }
        if(nums[i] ==0){
            let temp = nums[p0];
            nums[p0]= 0;
            nums[i] = temp;
            p0++;
        }
    }
};