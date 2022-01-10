//  先确定前两个数， 在根据前两个数计算出第三个数应该是什么，计算完之后与第二个数之后的长度相同的数进行比较
//  比较之后如果 相同则继续移动 first指针 和 second指针，直到达到末尾
// 通过中间字符串 来 确定前面字符串 和 后面字符串的位置
// 另一个知识点 字符串数值相加 算法 从末尾加起来，进位如何处理等, 知识点多多
/**
 * 判断一个字符串是不是一个累加字符串
 * 字符串中所有的字符 都是 [0-9]
 * 
 * @param {string} nums
 * @return {boolean}
 * @public 
 */

function isAdditiveNumber(nums) {
    let n = num.length;
    for(let secondStart = 1; secondStart < n -1; secondStart++) {
        if(num[0] === '0' && secondStart != 1) {
            break;
        }

        for(let secondEnd = secondStart; secondEnd < n - 1; secondEnd++) {
            if(num[secondStart] === '0' && secondStart != secondEnd) {
                break;
            }
            if(validat(num, secondStart, secondEnd)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * 通过第二个数的开始指针和结束指针，确定第一个数，并验证第三个数是否是我们所想要的数
 * 
 * @param {string} nums
 * @param {number} secondStart
 * @param {number} secondEnd
 * @return {boolean}
 */
function validat(nums, secondStart, secondEnd) {
    let n = nums.length;
    let firstStart = 0, firstEnd = secondStart - 1;
    while(secondEnd <= n-1) {
        let third = stringAdd(nums, firstStart, firstEnd, secondStart, secondEnd);
        let thirdStart = secondEnd + 1;
        let thirdEnd = secondEnd + third.length;
        if(thirdEnd >= n || nums.slice(thirdStart, thirdEnd + 1) != third) {
            break;
        }
        if(thirdEnd === n -1) {
            return true;
        }
        firstStart = secondStart;
        firstEnd = secondEnd;
        secondStart = thirdStart;
        secondEnd = thirdEnd;
    }
    return false;
}

/**
 * 
 * @param {string} nums
 * @param {number} firstStart
 * @param {number} firstSecond
 * @param {number} secondStart
 * @param {number} secondEnd
 * @return {string}
 */
function stringAdd(nums, firstStart, firstEnd, secondStart, secondEnd) {
    let carry = 0, cur = 0;
    const zeroCode = '0'.charCodeAt();
    const third = [];
    while(firstStart <= firstEnd || secondStart <= secondEnd || carry != 0) {
        cur = carry;
        if(firstStart <= firstEnd) {
            cur += nums[firstEnd].charCodeAt() - zeroCode;
            firstEnd--;
        }
        if(secondStart <= secondEnd) {
            cur += nums[secondEnd].charCodeAt() - zeroCode;
            secondEnd--;
        }
        carry = Math.floor(cur / 10);
        cur = cur % 10;
        third.push(String.fromCharCode(cur + zeroCode));
    }
    third.reverse();
    return third.join('');

}