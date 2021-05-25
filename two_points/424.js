/**
 * Time: 2021/05/25
 * The Longest Repeating Character ReplaceMent
 * for this question I do not think too much about it
 * tow points should be used 
 * because that need to record the length of substring
 * the end of condition of right point is that do not have another chance to replace
 * and get the length 
 * then get the max length
 * however, in the official solution
 * we do not need to record where is beginning of the substing
 * we just need to do keep the window as big as possible
 * so the result will be the window right index - the window left index
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    const num = new Array(26).fill(0);
    const n = s.length;
    let maxn = 0, left = 0, right = 0;

    while (right < n) {
        num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
        maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
        if (right - left + 1 - maxn > k) {
            num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
            left++;
        }
        right++;
    }
    return right - left;
};