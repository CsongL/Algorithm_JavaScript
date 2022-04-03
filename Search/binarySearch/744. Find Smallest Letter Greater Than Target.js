const nextGreatestLetter = function(letters, target) {
    if(letters[letters.length - 1] <= target) {
        return letters[0];
    }
    let low = 0, high = letters.length - 1;
    while(low < high) {
        let mid = Math.floor((high - low) / 2) + low;
        if(letters[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return letters[low];
}