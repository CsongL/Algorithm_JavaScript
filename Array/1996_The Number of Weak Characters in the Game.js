// 很有意思的一道脑筋急转弯题目   先按照攻击力 从大到小排序，那么之后的元素的攻击力要么等于 要么小于，
// 如果攻击力相同 再按照 防御力 从小到大的排序， 为什么不是从大到小，如果是从大到小排序, 那么会将攻击力相同，但防御力不同小的记为弱元素

function numberOfWeakCharacters(properties) {
    let ans = 0, max = 0;
    properties.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
    });
    for(let p of properties) {
        if(p[1] < max) {
            ans++;
        } else {
            max = p[1];
        }
    }
    return ans;
}