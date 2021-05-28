/**
 * Time: 2021/05/26
 * 
 * @param {} s 
 * @returns 
 */
var reverseParentheses = function(s) {
    let result = s;
    let leftIdnex= s.lastIndexOf('(');
    let rightIndex = s.indexOf(')', leftIdnex);
    while(leftIdnex != -1 && rightIndex != -1){
        console.log(leftIdnex, rightIndex);
        let prev = result;
        let reverse = prev.slice(leftIdnex+1, rightIndex).split("").reverse().join("");
        if(leftIdnex !=0 ){
            result = prev.slice(0, leftIdnex) +reverse;
        } else{
            result = reverse;
        }
        if(rightIndex != prev.length-1){
            result = result + prev.slice(rightIndex+1);
        }
        leftIdnex = result.lastIndexOf('(');
        rightIndex = result.indexOf(')',leftIdnex);
    }
    return result;
};

console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));