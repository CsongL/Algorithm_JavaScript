/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
 var minDays = function(bloomDay, m, k) {
    if (k * m > bloomDay.length) {
        return -1;
    }
    let low = 1, high = 1;
    const length = bloomDay.length;
    for (let i = 0; i < length; i++) {
        high = Math.max(high, bloomDay[i]);
    }
    while (low < high) {
        const days = Math.floor((high - low) / 2) + low;
        if (canMake(bloomDay, days, m, k)) {
            high = days;
        } else {
            low = days + 1;
        }
    }
    return low;
};

const canMake = (bloomDay, days, m, k) => {
    let bouquets = 0;
    let flowers = 0;
    const length = bloomDay.length;
    for (let i = 0; i < length && bouquets < m; i++) {
        if (bloomDay[i] <= days) {
            flowers++;
            if (flowers == k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return bouquets >= m;
}