/**
 * Time: 2021/05/27
 * sperate the list into two parts
 * one part is the link list containing the values all lower than the target x
 * another part is the link list containing the values that all largering than the targer x
 * according the question provided, the slow part should be placed before the large part
 * so we can pick up each part
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
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let largeHead = null, largePrev = null;
    let lowHead = null, lowPrev = null;
    let p = head;
    while(p != null){
        if(p.val<x){
            if(lowHead == null){
                lowHead = p;
                lowPrev = p;
                p = p.next;
            }else{
                lowPrev.next = p;
                lowPrev = p;
                p = p.next
            }
        } else{
            if(largeHead == null){
                largeHead = p;
                largePrev = p;
                p = p.next;
            }else{
                largePrev.next = p;
                largePrev = p;
                p = p.next;
            }
        }
    }
    if(lowHead == null || largeHead == null) {
        return head;
    } else{
        largePrev.next = null;
        lowPrev.next = largeHead;
        return lowHead;
    }
};