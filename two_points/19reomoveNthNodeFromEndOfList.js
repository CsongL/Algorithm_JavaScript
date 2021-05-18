/**
 * Ttime:2021/05/18
 * Today learn the two points method to solve some problem
 * slow, fast points mainly used to solve the problem of linked
 * left, right points mainly used to solve the problem of array and string
 * especially, when the array have been sorted, we should conside using the two points to solve the problem
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(head ==null){
        null;
    }
    let fast = head, slow = head;
    let prev = new ListNode();
    while(n-->0){
        fast = fast.next;
    }
    if(fast ==null){
        head = slow.next;
        return head
    }
    fast = fast.next;
    slow = slow.next;
    prev = head;
    while(fast !=null){
        fast = fast.next;
        slow = slow.next;
        prev =prev.next;
    }
    prev.next = slow.next;
    return head;
};