/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {
    houses = houses.sort((a, b) => a - b);
    heaters = heaters.sort((a, b) => a - b);
    let ans = 0;
    for(let i = 0, j = 0; i < houses.length; i++) {
        let dns = Math.abs(houses[i] - heaters[j]);
        while(j < heaters.length - 1 && dns >= Math.abs(houses[i] - heaters[j+1])) {
            j++;
            dns = Math.abs(houses[i] - heaters[j]);
        }
        ans = Math.max(ans, dns);
    }
    return ans;
};