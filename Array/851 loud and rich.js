/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    let n = quiet.length;
    const g = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        g[i] = [];
    }
    const inDeg = new Array(n).fill(0);
    for(let r of richer) {
        g[r[0]].push(r[1]);
        inDeg[r[1]]++;
    }
    let ans = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        ans[i] = i;
    }
    const q = [];
    for(let i = 0; i < n; i++) {
        if(inDeg[i] === 0) q.push(i);
    }
    while(q.length) {
        let x = q.shift();
        for(let y of g[x]) {
            if(quiet[ans[x]] < quiet[ans[y]]) {
                ans[y] = ans[x];
            }
            if(--inDeg[y] === 0) {
                q.push(y);
            }
        }
    }
    return ans;
};
