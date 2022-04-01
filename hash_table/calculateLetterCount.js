/**
 * 输入一串字符串，根据字符串求出每个字母的数量并返回对象
 * @parma {string} str
 * @return {object}
 * 
 */
const countLetters = (str) => {
    let i = 0;
    let n = str.length;
    let stack = [new Map()];

    while(i < n) {
        const parseLetter = () => {
            return str[i++];
        };
        const parseNum = () => {
            if( i === n || isNaN(Number(str[i]))) {
                return 1;
            }
            let num = 0;
            while(i < n && !isNaN(Number(str[i]))) {
                num = num * 10 + str[i++].charCodeAt() - '0'.charCodeAt();
            }
            return num;
        };

        if(str[i] === '(') {
            i++;
            stack.unshift(new Map());
        }
        else if(str[i] === ')') {
            i++;
            let num = parseNum();
            let topMap = stack.shift();
            let nextMap = stack[0];
            for(let [key, value] of topMap) {
                nextMap.set(key, (nextMap.get(key) || 0) + value * num);
            }
        } else {
            let letter = parseLetter();
            let num = parseNum();
            let topMap = stack[0];
            topMap.set(letter, (topMap.get(letter) || 0) + num);
        }
    }
    return stack[0];
}


console.log(countLetters('A(A(A2B)2)3C2'));