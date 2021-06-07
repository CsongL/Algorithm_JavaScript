/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * like this math question maybe should conside the binary solution
 */
 var isPowerOfTwo = function(n) {
    if(n==0) return false;
    if(n==1) return true;
    if(n<0) return false;
    if((n &(n-1)) ==0) return true;
    else return false;
};