/**
 * @param {number} n
 * @return {string[]}
 */
 var simplifiedFractions = function(n) {
    const res = [];
    if(n === 1) return res;
    for(let i = n; i >1; i--) {
        for(let j = i - 1; j > 0; j--) {
            console.log(i, j);
            if(gcd(i, j) === 1) res.push(`${j}/${i}`);
        }
    }
    return res;
};

function gcd(a, b) {
    if(b === 0) return a;
    else return gcd(b, a % b);
}