/**
 * Time:2021/05/12
 * original backtracking algrithom
 * should be linked to 77_combinations and 78_subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const result = [];
 var permute = function(nums) {
     let track = new Array();
     backtrack(track, nums);
     return result;
 };
 
 function backtrack(track, nums){
     if(track.length == nums.length){
         result.push(track.slice(0));
     }
     for(let i =0; i<nums.length; i++){
         if(track.indexOf(nums[i]) != -1) continue;
         track.push(nums[i]);
         backtrack(track, nums);
         track.pop();
     }
 }