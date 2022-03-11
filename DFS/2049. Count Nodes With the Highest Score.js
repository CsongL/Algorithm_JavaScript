/**
 * 深度优先搜索， 将parent array 转化为 children array 
 * size的使用也是一个思考的难点， 对我来说这个难点在于，通常我是通过累加的方式来计算节点的数量，而在这里是通过减的方式
 * 为什么要用累减的方式，因为除了根节点外和叶子节点外， 一个节点通常有三条边，通过累减我们还能知道父节点所在的子树的节点的数量
 * 从而去求的对应的分数
 *  
 * @param {number[]} parents
 * @return {number} results; 
 */

function countHighestScoreNodes(parents) {
    let n = parents.length;
    let children = new Array(n).fill(0).map(() => []);
    for(let i = 0; i < n; i++) {
        let p = parents[i];
        if(p != -1) {
            children[p].push(i);
        }
    }

    let maxScore = 0;
    let cnt = 0;
    let dfs = (node) => {
        let score = 1;
        let size = n - 1; // 除去本节点之后剩余节点的数量
        for(let c of children[node]) {
            let t = dfs(c);
            size -= t; // 减去子节点为根节点的数的节点数量
            score *= t;
        }

        if(node != 0) {
            score *= size;
        }

        if(score === maxScore) {
            cnt++;
        } else if(score > maxScore) {
            maxScore = score;
            cnt = 1;
        }
        return n - size;
    };

    dfs(0);
    return cnt;
}