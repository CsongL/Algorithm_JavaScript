/**
 * Time: 2021/05/17
 * fitstly, I think about the Backtracking algothrim, get the track containing the node, the compare these two track to judege whether they have same parents node
 * But the BackTracking consumes so much time
 * Secondly, I see that nodes that we want find is in the same hright. Therefore, I thought why I do not use the BFS
 * Bfs will firstly search every node in the same hegiht.
 * Therefore, I decide to use the BFS
 * link:https://leetcode-cn.com/problems/cousins-in-binary-tree/
 */
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    if(root == null){
        return false;
    }
    let que = new Array();
    que.push(root);
    while(que.length!=0){
        let result = new Array();
        let size = que.length;
        for(let i=0; i< size; i++){
            let curr = que.shift();
            if(curr.left != null) {
                if(curr.left.val == x || curr.left.val == y){
                    result.push([curr.left.val, curr.val]);
                }
                que.push(curr.left);
            }
            if(curr.right != null) {
                if(curr.right.val == x || curr.right.val == y){
                    result.push([curr.right.val, curr.val]);
                }
                que.push(curr.right);
            }
        }
        if(result.length == 1) return false;
        if(result.length == 2 && result[0][1] != result[1][1]) return true;
    }
    return false;
};