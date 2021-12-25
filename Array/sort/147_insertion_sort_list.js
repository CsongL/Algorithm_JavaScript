//  先比较已经排好序的链表中的最后一个节点和没有排好序的链表中的第一个节点
//  如果第一个节点的值比最后一个节点的值大，那么就不用进行插入操作
//  如果第一个节点的值比第二个节点的值小，那么就要从链表的投开始遍历，、
//  在已经排好序的链表里面找比第一个节点大的前节点，
//  然后在通过各种.next的赋值从而构建一个链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var insertionSortList = function(head) {
    if(head == null || head.next == null) return head;
    let finalHead = new ListNode(0);
    finalHead.next = head;
    let lastNode = head, curr = head.next;
    while(curr != null){
        if(lastNode.val <= curr.val){
            lastNode = lastNode.next;
        }else{
            let prev = finalHead;
            while(prev.next.val <= curr.val){
                prev = prev.next;
            }
            lastNode.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        curr  = lastNode.next;
    }
    return finalHead.next;
};