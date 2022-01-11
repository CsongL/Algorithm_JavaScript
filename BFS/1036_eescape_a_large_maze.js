// 和岛屿题目类似，宽度优先搜索， visited数组，
// 区别在于 如果全搜，那么会导致超时，因此 需要另一种判断方法，
// 而这种判断方法就是这个问题的难点所在
const BLOCKED = -1;

const VALID = 0;

const FOUND = 1;

const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const BOUNDARY = Math.pow(10, 6);

/**
 * 
 * @param {number[][]}
 * @param {number[]}
 * @param {number[]}
 */
 var isEscapePossible = function(blocked, source, target) {
     if(blocked.length < 2) {
         return true;
     }
 
     let blockHash = new Set();
     for(let pos of blocked) {
         blockHash.add([pos[0], pos[1]].toString());
     }
 
     let result = check(blocked, source, target, blockHash);
     if(result === FOUND) {
         return true;
     } else if (result === BLOCKED) {
         return false;
     } else {
         result = check(blocked, target, source, blockHash);
         return result != BLOCKED;
     }
 }
 
 function check(blocked, start, target, blockHash) {
     let sx = start[0], sy = start[1];
     let tx = target[0], ty = target[1];
     const visited = new Set();
     const queue = [];
     visited.add([sx, sy].toString());
     queue.push([sx, sy]);
     let countDown = Math.floor((blocked.length) * (blocked.length - 1) / 2);
     while(queue.length && countDown > 0) {
         let top = queue.shift();
         for(let dir of DIR) {
             let nx = top[0] + dir[0], ny = top[1] + dir[1];
             if(nx >=0 && nx < BOUNDARY && ny >= 0 && ny < BOUNDARY && !blockHash.has([nx, ny].toString())&& !visited.has([nx, ny].toString())) {
                 if(nx === tx && ny === ty) {
                     return FOUND;
                 }
                 countDown--;
                 queue.push([nx, ny]);
                 visited.add([nx, ny].toString());
             }
         }
     }
     if(countDown > 0) {
         return BLOCKED;
     }
     return VALID;
 }