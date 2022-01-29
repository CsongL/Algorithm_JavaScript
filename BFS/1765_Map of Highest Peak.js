// 多源BFS 
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
 var highestPeak = function(isWater) {
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let n = isWater.length, m = isWater[0].length;
    let ans = new Array(n);
    for(let i = 0; i < n; i++) {
        ans[i] = new Array(m).fill(0);
    }
    const queue = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(isWater[i][j] === 1) queue.push([i, j]);
            ans[i][j] = isWater[i][j] === 1 ? 0 : -1;
        }
    }
    while(queue.length) {
        let temp = queue.shift();
        let x = temp[0], y = temp[1];
        for(let item of dir) {
            let nx = x + item[0], ny = y + item[1];
            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if(ans[nx][ny] != -1) continue;
            ans[nx][ny] = ans[x][y] + 1;
            queue.push([nx, ny]);
        } 
    }
    return ans;
};