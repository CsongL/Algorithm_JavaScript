/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    let index = new Array();
    for(let item of buildings){
        if(index.indexOf(item[0]) == -1){
            index.push(item[0]);
        }
        if(index.indexOf(item[1]) == -1){
            index.push(item[1]);
        }
    }
    index.sort((a, b) => a - b);
    let prev = -1;
    let result = new Array();
    for(let i = 0; i< index.length; i++){
        let high = 0;
        let left = index[i];
        let right = index[i+1];
        for(let item of buildings){
            if(left >= item[0] && right <=item[1]){
                high = Math.max(high, item[2]);
            }else if(left <item[0]){
                break;
            }
        }
        if(prev != high){
            result.push([left, high]);
            prev = high;
        }
    }
    return result;
};