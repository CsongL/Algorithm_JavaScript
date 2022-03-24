const findKthNumber = function(n, k) {
    let curr = 1;
    k--;
    while(k > 0) {
        let steps = getSteps(curr, n);
        if(steps <= k) {
            k -= steps;
            curr++;
        } else {
            curr = curr * 10;
            k--;
        }
    }
    return curr;
}

function getStep(curr, n) {
    let step = 0;
    let first = curr;
    let last = curr;
    while(first <= n) {
        step += Math.min(last, n) - first + 1;
        first = first * 10;
        last = last * 10 + 9;
    }
    return step;
}