/**
Time: 2021/05/08
When we solve a algorithm quetion
Fistly, I should foucs on the structure of the question
Only when we fully understand the feature of teh queston
We can quickly get an answer and even provide a better solutions
Open mind to every question
the structure should not stuck you

First solution:
we can use the pre-oreder to get the array of the tree
According the pre-order array to create the link list

Second solution:
we can modify the tree on original tree  
Don not need to pre-order the tree
This method will save a lot of space
The method just use the feature of the question
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten1 = function(root) {
    if(root == null) {
        return null;
    }
    let result = [];
    preOrder(root, result);
    root.left = null;
    pre = root;
    for(let i = 1; i < result.length; i++) {
        let rightNode = new TreeNode(result[i]);
        pre.right = rightNode;
        pre = pre.rightNode;
    }
}

var preOrder = function(root, result) {
    if(root == null) {
        return;
    }
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
}


// solution 2
var flatten2 = function(root) {
    if(root == null) {
        return null;
    }
    let curr = root;
    while(curr!=null) {
        if(curr.left != null) {
            let next = curr.left;
            while(next.right != null) {
                next = next.right;
            }
            next.right = curr.right;
            curr.right = next;
            curr.left = null;
        }
        curr = curr.right;
    }
}