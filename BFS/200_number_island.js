/**
 * 通过宽度优先搜索来判断岛屿的数量
 * 每碰到一个岛屿 就开始宽度搜索，并且将已经搜索多的岛屿去除掉，以避免重复搜索的情况的发生
 * 
 * 
 * @param {string[][]}
 * @return {number}
 */

function islandNumber(grid) {
    let n = grid.length, m = grid[0].length;
    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === '1') {
                grid[i][j] = '0';
                let width = [].push([i, j]);
                while(width.length != 0) {
                    let len = width.length;
                    for(let z = 0; z < len; z++) {
                        let [x, y] = width.shift();
                        if(x + 1 < n && grid[x+1][y] === '1') {
                            gird[x + 1][y] = '0';
                            width.push([x + 1, y]);
                        }
                        if(x - 1 > 0 && grid[x-1][y] === '1') {
                            grid[x - 1][y] = '0';
                            width.push([x - 1, y]);
                        }
                        if(y + 1 < m && grid[x][y+1] === '1') {
                            grid[x][y+1] = '0';
                            width.push([x][y+1]);
                        }
                        if(y - 1 < 0 && grid[x][y-1] === '1') {
                            grid[x][y-1] = '0';
                            width.push([x][y-1]);
                        }
                    }
                }
                result++;
            }
        }
    }
    return result;
}