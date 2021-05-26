/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let final = new Array();
    for(let i =0; i<m;i++){
        final.push(...matrix[i]);
    }
    let left = 0;
    let right = final.length-1;
    while(left <=right){
        let mid = left + parseInt((right-left)/2);
        if(final[mid] == target) {
            return true;
        }else if(final[mid] < target){
            left = mid+1;
        }else if(final[mid] > target){
            right = mid-1;
        } 
    }
    return false;
};