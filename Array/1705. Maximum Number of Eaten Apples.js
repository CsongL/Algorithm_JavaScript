/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
 var eatenApples = function(apples, days) {
    let ans = 0;
    let priQueue = new PriorityQueue();
    for(let i = 0 ; i < apples.length; i++) {
        if(apples[i] != 0) priQueue.push([apples[i], i + days[i]]);
        while(priQueue.size() > 0 ) {
            let a = priQueue.get();
            if(a[1] <= i) priQueue.pop();
            else break;
        }
        if(priQueue.size() > 0) {
            let arr = priQueue.pop();
            ans++;
            arr[0]--;
            if(arr[0] > 0 ) priQueue.push(arr);
        }
    }
        console.log(priQueue)
    let n = apples.length;
    while(priQueue.size() > 0) {
        let arr = priQueue.pop();
        ans += Math.min(arr[0], arr[1] - n);
        n += Math.min(arr[0], arr[1] - n);
    }

    return ans;
};

class PriorityQueue {
    constructor() {
        this.queue = [];
    };
    push(param) {
        let date = param[1];
        let i  = 0;
        if(this.queue.length === 0) {
            this.queue.push(param);
            return;
        }
        while(i < this.queue.length && this.queue[i][1] < date) i++;
        this.queue.splice(i, 0, param);
    };
    size() {
        return this.queue.length;
    }
    get() {
        return this.queue[0];
    }
    pop() {
        return this.queue.shift();
    }

}