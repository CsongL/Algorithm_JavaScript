/**
 * Time: 2021/05/12
 * combination is the fixed length of subset of an array
 * Therefore, we can easily get the inspiration fro the 78 subsets
 * combinations also need a start to limit the repetation questipns
 * substes do not limit the length
 * but in this question asking for the combination 
 * the end condition is the length of subste
 */
 const result = [];
 var combine = function(n, k) {
     let track = new Array();
     backtrack(track, n, k, 1);
     return result;
 };
 function backtrack(track, n, k, start){
     if(track.length == k) {
         result.push(track.slice(0));
     }
     for(let i = start; i<=n; i++){
         track.push(i);
         backtrack(track, n, k, i+1);
         track.pop();
     }
 }