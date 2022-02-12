// 这道题既能使用bfs(宽度优先搜索) 也能使用dfs(深度优先搜索)
// 首先是 深度优先搜索
/**
 * @param {number[][]} grid
 * @return {number}
 */
 const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
 var numEnclaves = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    

    const dfs = (row, col) => {
        if(row < 0 || row >= m || col < 0 || col >= n || visited[row][col] || grid[row][col] === 0) {
            return;
        }
        visited[row][col] = true;
        for(let change of dir) {
            dfs(row + change[0], col + change[1]);
        }
    }

    for(let i = 0 ; i < m; i++) {
        dfs(i, 0);
        dfs(i, n-1);
    }
    for(let j = 1; j < n-1; j++) {
        dfs(0, j);
        dfs(m-1, j);
    }

    let ans = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(!visited[i][j] && grid[i][j] === 1) {
                ans++;
            }
        }
    }
    return ans;
};


// 宽度优先搜索
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numEnclavesBFS = function(grid) {
     let m = grid.length;
     let n = grid[0].length;
     let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
     let queue = [];

     for(let i = 0; i < m; i++) {
         queue.push([i,0]);
         queue.push([i, n - 1]);
     }
     for(let j = 1; j < n - 1; j++) {
         queue.push([0, j]);
         queue.push([m-1, j]);
     }

     while(queue.length) {
         let [row, col] = queue.shift();
         for(let change of dir) {
            let x = row + change[0], y = col + change[1];
            if(x >=0 && x < m && y >=0 && y < n && grid[x][y] === 1 && !grid[x][y]) {
                visited[x][y] = true;
                queue.push([x, y]);
            }
         }
     }

     let ans = 0;
     for(let i = 0; i < m; i++) {
         for(let j = 0; j < n; j++) {
             if(!visited[i][j] && grid[i][j] === 1) {
                 ans++;
             }
         }
     }
     return ans;
}