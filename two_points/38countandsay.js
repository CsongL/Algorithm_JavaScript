// leetcode 38题
// 两种思路 一种是模拟 
// 另一种是将所有的结果的先计算出来，因为n的值最多到30，所以可以先全部计算出来，从而节省重复计算的时间

// 第一种 用了尾部调用，从而避免溢出，但是好像尾部调用只有在严格模式下才体现作用
// 但这是要有这种尾部调用的思想
var countAndSay = function(n) {
    return getResult(n, '1');
};

function getResult(n, total){
    if(n <= 1) return total;
    let result = '';
    let prev = total[0];
    let count = 0;
    for(let i = 0; i < total.length; i++){
        if(prev == total[i]){
            count++;
        } else {
            result = result + count + prev;
            prev = total[i];
            count = 1;
        }
    }
   result = result + count + prev;
    return getResult(n-1, result);
}

// 第二种 建表 说白了 就是先把所有的结果都跑出来 存储一下，然后后面可以直接使用
// 节省了重复计算的时间
const arrResult = ['1'];
function createTable(){
    for(let i = 1; i<30; i++){
        let prev = arrResult[i-1], cur = '';
        for(let j=0; j< prev.length;){
            let k = j+1;
            while(k < prev.length && prev[j] == prev[k]) k++;
            let cnt = k - j;
            cur = cur + cnt + prev[j];
            j = k;
        }
        arrResult.push(cur);
    }
}
createTable();

function soluction(n){
    return arrResult[n];
}
console.log(soluction(4));