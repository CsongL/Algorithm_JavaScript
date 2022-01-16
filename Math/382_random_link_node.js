// 难点在于 如何实现 每一个数被选择的概率都相等
/**
 * 第一种 蓄水池抽样 
 * 蓄水池抽样 算法 就是总体样本数量未知，要求取得每一个数的概率都是一样的，所以可以使用蓄水池抽样算法
 * 
 * @param {ListNode} head 
 */
function Solution(head) {
    this.head = head;
}

Solution.prototype.getRandom = function() {
    let i = 1, ans = 0;
    for(let head = this.head; head != null; head = head.next) {
        if(Math.floor(Math.random() * i) === 0) {
            ans = head.val;
        }
        i++;
    }
    return ans;
}


/**
 * 第二种 方法 将所有的节点的值放入一个数组中，然后随机获取数组中的值
 * 
 */

let list = [];
function Solution2(head) {
    while(head) {
        list.push(head.value);
        head = head.next;
    }
}

Solution2.prototype.getRadom = function() {
    return list[Math.floor(Math.getRandom() * list.length)];
}