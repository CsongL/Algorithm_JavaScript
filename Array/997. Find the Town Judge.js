/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    if(n === 1 && trust.length === 0) return n;
    let trustTo = new Array(n+1).fill(0);
    let trusted = new Array(n+1).fill(0);
    for(let i = 0; i < trust.length; i++) {
        trustTo[trust[i][0]]++;
        trusted[trust[i][1]]++;
    }
    let index = trusted.indexOf(n-1);
    let lastIndex = trusted.lastIndexOf(n-1);
    if(index === -1 || trustTo[index] != 0 || index != lastIndex) {
        return -1;
    }
    return index;
};