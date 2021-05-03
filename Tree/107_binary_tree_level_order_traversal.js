/**
 * Time: 2021.05.03
 * 
 Firstly, according the requrie, we should use the Breath First Search to solve the problem.
 Using queue to achieve the Breath First Search 
 According to the resule, we find that the node of each line should be placed in same array
 In order to achieve the goal, we should get all nodes in the queue Each time
 That is because that all nodes in queue is these nodes that lies in same line
 This is a very important feature.
 Every time these nodes in queue lie in same line in the tree 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root || root.length == 0) {
        return 0;
    }
    let nodeQue = [];
    nodeQue.push(root);
    let result = [];
    while(nodeQue.length != 0) {
        let n = nodeQue.length; // get the number of these nodes in the nodeQue
        let lineNodeVal = [];
        for(let i = 0; i < n; i++) {
            let curr = nodeQue.shift();
            lineNodeVal.push(curr.val);
            if(curr.left) nodeQue.push(curr.left);
            if(curr.right) nodeQue.push(curr.right);
        }
        result.push(lineNodeVal);
    }
    return result;
}