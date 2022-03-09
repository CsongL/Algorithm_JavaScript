/**
 * @param {number[]} nums
 * @return {number}
 */

const bestRotation = function(nums) {
    let n = nums.length;
    let c = new Array(n).fill(0);

    for(let i = 0; i <n ; i++) {
        let a = (i - (n-1) + n) % n, b = (i - nums[i] + n) % n;
        if(n-1 >= nums[i]) {
            c[a]++;
            c[b+1]++;
        } else {
            c[0]++; c[b+1]++;
            c[a]++; c[n]++;
        }
    }

    let score = 0;
    let highestScore = 0;
    let index = 0;
    for(let i = 0; i < n ; i++) {
        score = score + c[i];
        if(highestScore < score) {
            highestScore = score;
            index = i;
        }
    }
    return index;
};