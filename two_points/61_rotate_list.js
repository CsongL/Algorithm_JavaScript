/**
 * Time:2021/05/18
 * linked list use the fast, slow points to solve
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
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(k ==0){
        return head;
    }
    if(head == null || head.next == null){
        return head;
    }
    let fast = head;
    let length = 1;
    while(fast.next!=null){
        fast = fast.next;
        length+=1;
    }
    let position = k % length;
    fast = head;
    let slow = head;
    while(position-->0){
        fast = fast.next;
    }
    while(fast.next!=null){
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
};