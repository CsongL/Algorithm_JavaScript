//  313 超级丑数   313与264相关联，区别在于264只有三个质因数2,3,5， 而313提供的是一个质因数数组
//  如果使用最小堆的话 会超时， 因为最小堆需要存储大量不需要的数据，而且需要一个个想乘，如果这个primes很大那么就会超时
// 因此对于313题来说 只能使用dp的方法来求解
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
 var nthSuperUglyNumber = function(n, primes) {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    let m = primes.length;
    let pointers = new Array(m).fill(1);
    for(let i=2; i<=n; i++){
        let nums = new Array(m).fill(m);
        let minNum = Number.MAX_SAFE_INTEGER;
        for(let j =0; j<m; j++){
            nums[j] = dp[pointers[j]] * primes[j];
            minNum = Math.min(minNum, nums[j]);
        }
        dp[i] = minNum;
        for(let j =0; j<m; j++){
            if(minNum == nums[j]){
                pointers[j] = pointers[j] + 1;
            }
        }
    }
    return dp[n];
 };