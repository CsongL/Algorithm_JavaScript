let totalLength = readInt();
let redCount = readInt();
let blueCount = readInt();
let str = gets(10000).trim;

let needRed = 0
let needBlue = 0;
for(let i = 0; i < str.length - 1; i++) {
    if(str[i] === 'r' && str[i] === str[i + 1]) {
        needRed++;
        continue;
    }
    if(str[i] === 'b' && str[i] === str[i + 1]) {
        needBlue++;
        continue;
    }
}

if(needRed <= redCount && needBlue <= blueCount) {
    console.log(str.length + needRed + needBlue);
    
} else {
    console.log(
        redCount - needRed >= 0 ? 0 : needRed - readCount,
        blueCount - needBlue >= 0 ? 0 : needBlue - blueCount
    )
}



