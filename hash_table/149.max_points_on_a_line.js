// 一条线上最多的点数
//  多点在一天直线上，说明两点之间的斜率相同，每次我们固定一个点， 然后计算其他点与该基础点连线的斜率，
//  然后用map来记录， 以斜率作为键，值为点（与基础点连线的斜率相同）的个数
//  然后对每一个基础点的map求一次最大值， 最终我们会得到拥有最多个点的那一条直线上的点数
// 不能直接以斜率来作为map的键， 可以以（x,y) 来作为键， x是x1-x2 除以 x1-x2 与 y1-y2的最大公约数
/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
    if(points.length == 0) return 0;
    if(points.length == 1) return 1;
    let max = Number.MIN_VALUE;
    for(let i =0; i< points.length; i++){
        let map = new Map();
        for(let j=0; j< points.length; j++){
            if(i==j) continue;
            let y = points[j][1] - points[i][1];  
            let x = points[j][0]-points[i][0];
            let x_y_gcd;
            if(Math.abs(x) != 0){
                x_y_gcd = gcd(Math.abs(y), Math.max(x)); 
            }
            if((x<0 && y<0) ||(x>0 && y>0)){
                x = Math.abs(x);
                y = Math.abs(y);
            }
            if(x < 0 && y>0){
                x = -x;
                y = -y;
            }
            x = x / x_y_gcd;
            y = y / x_y_gcd;
            let k = `(${x}, ${y})`;
            if(!map.has(k)){
                map.set(k, 1);
            }else{
                let result = map.get(k);
                map.set(k, result+1);
            }
        }
        for(let value of map.values()){
            max = Math.max(value, max-1)+1;
        }
    }
    return max;
};

function gcd(m,n){
    if(m%n == 0){
        return n;
    }else{
        return gcd(n, m%n);
    }
}