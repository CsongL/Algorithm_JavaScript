/**
 *Time:
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const result = [[]]
 var subsets = function(nums) {

     for(let i =1; i<= nums.length; i++){
        let track =new Array(i);
        bakctrack(track, nums, 0);
     }
     return result;
 };
 
 function bakctrack(track, nums, i){
     console.log(track)
     if(track.length == i) {
         result.push(track);
         return;
     }
     for(let elem of nums) {
         if(track.indexOf(elem) != -1) continue;
         track.push(elem);
         bakctrack(track. nums, i++);
         track.pop();
     }
 }
 console.log(subsets([1,2,3]));