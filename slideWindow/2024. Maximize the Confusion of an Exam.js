/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
 var maxConsecutiveAnswers = function(answerKey, k) {
    return Math.max(maxConsecutiveChar(answerKey, k, 'F'), maxConsecutiveChar(answerKey, k, 'T'));
};

function maxConsecutiveChar(answerKey, k, ch) {
    let n = answerKey.length;
    let ans = 0;
    for(let left = 0, right = 0, sum = 0; right < n; right++) {
        sum += answerKey[right] !== ch ? 1 : 0;
        while(sum > k) {
            sum -= answerKey[left++] !== ch ? 1 : 0;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}