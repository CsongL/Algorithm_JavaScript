// amazing thinking thought. node.next also is a node, so node.next si also suitable for the function copyRandomList
// meanwhile node.random is also sutiable for the function copyRandomList
// they also are the node, therefore, the function copyRandoList can be used to get the node
// but the hard part of the questions is that it is hard for people to think out that we need use the map to record the releationship between new node and old node
// it is also hard for people to think out that can use constantly use one function to copy a node

  // Definition for a Node.
  function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
  };
 

/**
 * @param {Node} head
 * @return {Node}
 */
let map = new Map();
function copyRandomList(head){
    if(head == null) return null;
    if(map.has(head)) return map.get(head);
    let node = new Node(head.val());
    map.set(head, node);
    node.next = copyRandomList(head.next);
    node.random = copyRandomList(head.random);
    return node;
}