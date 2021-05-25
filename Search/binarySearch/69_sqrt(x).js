/**
 * Time:2021/05/25
 * how can I get the result fine
 * just feel I am so anxious
 * there is a lot of time to do that
 */
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let
        left = 0,
        right = x,
        mid = ~~((left + right) / 2);
    while(left <= right) {
        if(mid ** 2 === x) {
            return mid;
        } else if(mid ** 2 > x) {
            right = mid - 1;
        } else { 
            left = mid + 1;
        }
        mid = ~~((left + right) / 2);
    }
    return mid;
};