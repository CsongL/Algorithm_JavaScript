/**
 * Time: 2021.05/11
 * We should seriously conside the condition given in the question
 *  For the bit mianapulation, always about some math 
 * should seriouly consider before take action
 * 
 */
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
 var decode = function(encoded) {
    let n = encoded.length +1;
    let total = 0;
    for(let i =1; i<=n; i++){
        total ^= i;
    }
    let odd= 0;
    for(let i =1; i <n-1; i+=2){
        odd ^=encoded[i];
    }
    let prem = new Array(n).fill(0);
    prem[0] = total ^odd;
    for(let i =1; i<n; i++){
        prem[i] = prem[i-1] ^encoded[i-1];
    }
    return prem;
 };
