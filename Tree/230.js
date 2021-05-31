// binary search tree 
// find the kth smallest number in the binary search tree
// mid-order + purning
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 let result;
var kthSmallest = function(root, k){
    getTreenode(root);
    return result;
};
function getTreenode(root, k){
    if(root != null && k>0){
        getTreenode(root.left, k);
        --k;
        if(k == 0){
            result = root.val;
            break;
        }
        getTreenode(root.right, k);
    }
}