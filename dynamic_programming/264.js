//  丑数  最小堆 或者 dp方法
//  最小堆的方法就是通过数组来模拟，将最小的数放在数组的首部
//  用首部最小的数分别乘以质数然后将乘积在push入数组中，在排序，将最小的值放入首部
var  nthUglyNumber = function(n){
    let primes = [2, 3,5];
    let queue = [1];
    let set = [1]
    while(n-- > 0){
        let temp = queue.shift();
        if(n==0) return temp;
        for(let key of primes){
            if(set.indexOf(key * temp) == -1){
                set.push(key*temp);
                queue.push(key*temp);
            }
        }
        queue.sort((a,b)=> a-b);
    }
    return -1;
}


// dp动态规划的方法，有点难以理解
// 本质在于记录这个质因数已经乘以的数的位置
var nthUglyNumberDp = function(n){
    let primes = [2,3,5];
    let dp = new Array(n+1).fill(0);
    dp[1] =1;
    let pointers = new Array(3).fill(1);
    for(let i=2; i<=n;i++){
        let nums = new Array(3).fill(0);
        let minNum = Number.MAX_SAFE_INTEGER;
        for(let j=0; j<3;j++){
            nums[j] = dp[pointers[j]] * primes[j];
            minNum = Math.min(minNum, nums[j]);
        }
        dp[i] = minNum;
        for(let j=0; j<3;j++){
            if(minNum == nums[j]) pointers[j]++;
        }
    }
    return dp[n];
}