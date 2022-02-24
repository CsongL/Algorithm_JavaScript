/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
    let n = grid.length, m = grid[0].length;
    let ans = new Array(m).fill(-1);
    for(let i = 0; i < m; i++) {
        let result = dfs([0, i], n, m, grid)
        ans[i] = result;
    }
    return ans;
};

function dfs(cor, n, m, grid){
    let [row, col] = cor;
    if(row === n) {
        return col;
    } 
    if(grid[row][col] === 1 && col + 1 < m && grid[row][col+1] != -1) {
        return dfs([row+1, col+1], n, m, grid);
    } else if(grid[row][col] === -1 && col - 1 >= 0 && grid[row][col-1] != 1) {
        return dfs([row + 1, col -1], n, m, grid);
    }
    return -1;
}