/**
 * Time: 2021/05/08
 * This question also has 2 solution
 * First Solution: use the Breadth first search
 * the complexity of space is O(n)
 * the time complexity is O(n)
 * 
 * Second Solution uset he feature of the question and the structure of tree node
 * use the Nth node to calculate the (N+1)th node
 * fully use the feature of the TreeNode
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
    if(root == null) {
        return null;
    }
    let leftmost = root;
    while(leftmost.left != null) { // process the whole tree 
        let head = leftmost;
        while(head != null) {  // process the node in the same heihgt, begin with the node in the fat left of same height 
            head.left.next = head.right;
            if(head.next != null) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}