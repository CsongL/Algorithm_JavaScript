/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
     let prev = 2;
     while(n != 0) {
         let curr = n % 2;
         if(prev === curr) {
             return false;
         }
         prev = curr;
         n = Math.floor(n / 2);
     }
     return true;
 }