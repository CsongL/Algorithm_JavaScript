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
 var reverseEvenLengthGroups = function(head) {
    let start, prev, curr = head;
    let arr = [];
    let flag = false;
    let n = 0;
    while(curr) {
        if(arr.length === 2 * n && flag){
            inverse(start, arr);
            arr = [];
            flag = false;
            start = prev;
        } else if(arr.length === (2 * n + 1) && !flag){
            start = prev;
            n = n + 1;
            arr = [];
            flag = true;
        } else {
            arr.push(curr.val);
            prev = curr;
            curr = curr.next;
        }
    }
    if(arr.length % 2 == 0){
        inverse(start, arr);
    }
    return head;
};

function inverse(start, arr){
    let curr = start.next;
    for(let i = arr.length - 1; i>=0; i--){
        curr.val = arr[i];
        curr = curr.next;
    }
}