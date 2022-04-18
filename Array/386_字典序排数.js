/**
 * 
 * @param {number} n
 * @return {number[]}
 */

function lexicalOrder(n) {
    let result = [];
    let number = 1;
    for(let i = 0; i < n; i++) {
        result.push(number);
        if(number * 10 <= 10) {
            number *= 10;
        } else {
            while(number % 10 === 9 || number + 1 > n) {
                number =  Math.floor(number / 10);
            }
            number++;
        }
    }
    return result;
}