function countValidWords(sentences) {
    let arr = sentences.split(' ');
    let ans = 0;
    for(let sen of arr) {
        if(isValid(sen)) {
            ans++;
        }
    }
    return ans;
}

function isValid(sentence) {
    let n = sentence.length;
    if(n === 0) return false;
    let hyFlag = false;
    for(let i = 0; i < n; i++) {
        if(sentence[i] >= '0' && sentence[i] <='9') {
            return false;
        } else if(sentence[i] === '-') {
            if(hyFlag || i === 0 || i === n -1 || !isLetter(sentence[i - 1]) || !isLetter(sentence[i+1])) {
                return false;
            }
            hyFlag = true;
        } else if(sentence[i] === '!' || sentence[i] === ',' || sentence[i] === '.') {
            return i === n -1;
        }
    }
    return true;
};

function isLetter(ch) {
    if(ch >='a' && ch <='z' || ch >='A' && ch <= 'Z') {
        return true;
    }
    return false;
}

console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."));
