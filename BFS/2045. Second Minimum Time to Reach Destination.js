// 求图中一点到目标点的最近距离 使用的就是BFS 宽度优先搜索， 而这道题 求的是第二短，那么也还是可以使用宽度优先搜索，只不过求的是第二短
var secondMinimum = function(n, edges, time, change) {
    let graph = new Array(n+1).fill(0).map(() => new Array());
    for(let edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    // path[i][0] 表示的是 1 到 i 的最短路径  path[i][1] 表示的是 1 到 i的次短路径
    const path = new Array(n+1).fill(0).map(() => new Array(2)).fill(Number.MAX_SAFE_INTEGER);
    path[1][0] = 0;
    const queue = [path[1][0]];
    while(path[n][1] === Number.MAX_SAFE_INTEGER) {
        const [cur, len] = queue.shift();
        for(let next of graph[cur]) {
            if(len + 1 < path[next][0]) {
                path[next][0] = len + 1;
                queue.push(path[next][0]);
            } else if(len + 1 > path[next][0] && len + 1 < path[next][1]) {
                path[next][1] = len + 1;
                queue.push(path[next][1]);
            }
        }
    }
    let ret = 0;
    for (let i = 0; i < path[n][1]; i++) {
        if (ret % (2 * change) >= change) {
            ret = ret + (2 * change - ret % (2 * change));
        }
        ret = ret + time;
    }
    return ret;
}