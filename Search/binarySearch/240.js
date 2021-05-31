// we should seriouly conside the feature of question
// sometimes we think more abou the feature of question
// we can get more answer
// especially for the question that data have been sorted
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let i = m-1, j=0;
    while(i>=0 && j<n){
        if(matrix[i][j] == target){
            return true;
        }else if(matrix[i][j] > target){
            i--;
        }else if(matrix[i][j] < target){
            j++;
        }
    }
    return false;
};