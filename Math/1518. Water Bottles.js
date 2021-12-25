/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let ans = 0;
    let count = numBottles;
    while(count) {
        let coe = Math.floor(count / numExchange);
        if(coe ==0) {
            ans = ans + count;
            count = 0;
        } else {
            ans = coe * numExchange + ans;
            count = coe + (count % numExchange);
        }
    }
    return ans;
};