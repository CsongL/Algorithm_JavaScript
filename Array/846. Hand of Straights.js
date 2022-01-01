/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    if(groupSize === 1) return true;
    let map = new Map();
    let n = hand.length;
    if(n % groupSize != 0) return false;
    for(let i = 0 ; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1);
    }
    let keys = [...map.keys()].sort((a, b) => a - b);
    while(keys.length != 0) {
        let key = keys[0];
        if(map.get(key) === 0) {
            keys.shift();
            continue;
        }
        for(let i = 0; i < groupSize; i++) {
            let cnt = map.get(key + i) || 0;
            console.log(cnt);
            if(cnt === 0) return false;
            map.set(key + i, cnt - 1);
        }
    }
    return true;
};