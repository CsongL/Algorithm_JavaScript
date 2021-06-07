// the basice backtracking questions
// get the each path form start node to end node
// and calculate the sum of each path
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
 * @return {number}
 */
 let result = 0;
 var sumNumbers = function(root) {
     if(root == null) return 0;
     result = 0;
     let track = ""
     backtracking(track, root);
     return result
 
 };
 function backtracking(track, root){
     track = track + root.val;
     if(root.left == null && root.right == null){
         result = result + parseInt(track);
         return;
     }
     if(root.left!=null){
         backtracking(track, root.left);
     }
     if(root.right != null) {
         backtracking(track, root.right);
     }
 }