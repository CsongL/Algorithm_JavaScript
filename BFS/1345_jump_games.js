// 有三个没过时间限制  
// 但是这个题 求图中到达某一个点的最小步骤 就用宽度优先搜索， 宽度优先搜索算法 就是用来查找从一点出发到某一点的最小步数
/**
 * 
 * @param {number[]}
 * @return {number} -1 表示不能到结尾， step表示走到数组结尾的步数
 */

 var minJumps = function(arr) {
    let map = new Map();
    let n = arr.length;
    for(let i = n - 1; i >= 0; i--) {
        if(map.has(arr[i])) {
            let list = map.get(arr[i]);
            list.push(i);
            map.set(arr[i], list);
        } else {
            let list = new Array();
            list.push(i);
            map.set(arr[i], list);
        }
    }
    let dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let d = new Array();
    d.push(0);
    dist[0] = 0;
    while(d.length != 0) {
        let index = d.shift(), step = dist[index];
        if(index === n -1) return step;
        if(index + 1 < n && dist[index + 1] === Number.MAX_SAFE_INTEGER) {
            d.push(index+1);
            dist[index+1] = step + 1;
        }
        if(index -1 >= 0 && dist[index-1] === Number.MAX_SAFE_INTEGER) {
            d.push(index-1);
            dist[index - 1] = step + 1;
        }
        if(!map.has(arr[index])) continue;
        let list = map.get(arr[index]);
        for(let val of list) {
            if(dist[val] === Number.MAX_SAFE_INTEGER) {
                d.push(val);
                dist[val] = step + 1;
            }
        }
        map.delete(arr[index]);
    }
    return -1;
};