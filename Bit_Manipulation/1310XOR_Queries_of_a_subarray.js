/**
 *Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], 
 for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). 
 Return an array containing the result for the given queries.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xor-queries-of-a-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 *  @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
    let n = queries.length;
    let result = new Array();
    for(let i = 0; i<n; i++){
        let left = queries[i][0];
        let right = queries[i][1];
        let temp = 0;
        for(let j = left; j <= right; j++){
            temp = temp ^ arr[j]
        }
        result.push(temp);
    }
    return result;
};
console.log(xorQueries([16],[[0,0],[0,0],[0,0]]));