const MASK1 = 1 << 7;
const MASK2 = (1 << 7) + (1 << 6);

var validUtf8 = function(data) {
    const m = data.length;
    let index = 0;
    while (index < m) {
        const num = data[index];
        const n = getBytes(num);
        if (n < 0 || index + n > m) {
            return false;
        }
        for (let i = 1; i < n; i++) {
            if (!isValid(data[index + i])) {
                return false;
            }
        }
        index += n;
    }
    return true;
};

const getBytes = (num) => {
    if ((num & MASK1) === 0) {
        return 1;
    }
    let n = 0;
    let mask = MASK1;
    while ((num & mask) !== 0) {
        n++;
        if (n > 4) {
            return -1;
        }
        mask >>= 1;
    }
    return n >= 2 ? n : -1;
}

const isValid = (num) => {
    return (num & MASK2) === MASK1;
}