/**
 * 给一个时间字符串数组 格式为 "HH:MM", 求两个时间之间间隔最短的分钟数
 * 首先 要转换为分钟，其次有时候离 24小时更近  例如 23:59 离 24小时最进，但是24小时表示是用00:00,因此需要加上24小时
 * 
 *  
 * @param {string[]}
 * @return {number}
 */

function findMinDifference(timePoints) {
    let set = new Set(timePoints);
    if(set.size < timePoints) return 0;
    let arr = [];
    for(let i = 0; i < timePoints.length; i++) {
        let times = timePoints[i].split(':');
        let h = parseInt(times[0], 10), m = parseInt(times[1], 10);
        let miniute = h * 60 + m;
        arr.push(miniute);
        arr.push(miniute + 24 * 60);
    }
    arr.sort((a, b) => a - b);
    let ans = arr[1] - arr[0];
    for(let i = 0; i < arr.length - 1; i++) ans = Math.min(ans, arr[i+1] - arr[i]);
    return ans; 
}

/**
 * 
 * 第二种方法，模拟 hash， 记录每一个时刻的个数
 */
function findMiniDifference(timePoints) {
    let n = timePoints.length;
    if(n > 1440) return 0;
    let arr = new Array(1440 * 2 + 10).fill(0);
    for(let i = 0; i < n; i++) {
        let temp = timePoints[i].split(":");
        let h = parseInt(temp[0], 10), m = parseInt(temp[1], 10);
        arr[h*60 + m]++;
        arr[h*60 + m + 1440]++;
    }
    let ans = 1440, last = -1;
    for(let i = 0; i < 1440 * 2 && ans != 0; i++) {
        if(arr[i] === 0) continue;
        if(arr[i] > 1) ans = 0;
        else if(last != -1) ans = Math.min(ans, i - last);
        last = i;
    }
    return ans;
}