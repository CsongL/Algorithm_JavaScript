/**
 * 
 * @param {number} value 
 * @param {number[]} children 
 */

function TreeNode(value, children){
    this.value = value;
    this.children = children;
}

/**
 * @param {TreeNode} root
 * @return {number[]} result
 * 
 */
function preOrder(root) {
    if(!!root) return [];
    let result = [];
    let stack = [root];
    while(stack.length) {
        let node = stack.pop();
        result = result.push(node.value);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
}