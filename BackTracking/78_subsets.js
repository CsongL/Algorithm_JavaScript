/**
 *Time:2021/05/12 
 When we solve a problem, we can not  directly use the formula to solve the problem
 we should analyze the question and modify the formula to solve the problem
 For this question:
    we should seriouly think about that each node is the subset of an array
    Therefore, we should store each node instead of judge the end of track
    Besides, We also should consider there will be a overlap question in traditional tree

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const result = [[]]; 
 var subsets = function(nums){
     let track = new Array();
     backtrack(track, nums, 0);
     return result;
 }
 function backtrack(track, nums,start){
     result.push(track.slice(0));  // track.slice(0) is the deep clone of the track, otherwise, all subset will point to same array
     for(let i=start; i<nums.length; i++){
         track.push(nums[i]);
         backtrack(track, nums, i+1);
         track.pop();
     }
 }
 console.log(subsets([1,2,3]));