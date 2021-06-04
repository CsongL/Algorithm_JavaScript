// 说实话感觉自己像个傻子 这种问题多不好 
// 数学方法真的很诡异，这种方法可能很难在面试中做出来，所以这种方法不能强求
//  但是通用的方法还是可以想出来的
// 用集合保存A链表里的节点，然后在遍历B链表里面的节点，看集合里面是否有与B链表重复的节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    let a = headA, b = headB;
    while(a !=b){
        a = a==null? headB : a.next;
        b= b ==null ? headA : b.next;
    }
    return a;
};