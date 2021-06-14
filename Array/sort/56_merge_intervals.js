//  pay aatention to the sort()
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length == 1) return intervals;
    intervals.sort((a,b) => a[0]-b[0]);
    for(let i=0; i < intervals.length-1; ){
        let first = intervals[i];
        let second = intervals[i+1];
        if(first[1] >= second[0]){
            let end = first[1] > second[1] ? first[1] : second[1];
            let third = [first[0], end];
            intervals.splice(i, 2, third);
        }else{
            i++;
        }
    }
    return intervals;
};