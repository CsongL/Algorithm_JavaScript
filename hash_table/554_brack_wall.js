/**
Time: 2021/05/02
This question use the hash table to solve;
The key is the distance between the blank space and the left border
The value is the number of same distance in all wall line

The question is ask the number of crossed wall
We can turn that to get the the max value of the numeber of same distance
Use the total wall line to reduce the max value to get the min value of crossed wall


The code is not too much, but we should notice the thought behind the question
We can exchange the direction when we solve the problem. 
looking for the max value of same distance instead of getting the min value
MeanWhile, Using the distance as the key is also I do not think outstore that is worthy to record
 */
var leastBricks = function(walls) {
    let wallMap = new Map();
    for(let line of walls) {
        let wallNumber = line.length;
        let distance = 0;
        for(let i = 0; i < wallNumber -1; i++) {
            distance += line[i];
            wallMap.set(distance, (wallMap.get(distance) || 0) + 1); // if the wallMap do not have same distance, the value will be 0 +1
        }
    }
    let max = 0; // the max value of the number of same distance
    for(let [key, value] of wallMap) {
        max = Math.max(max, value);
    }
    return walls.length - max;
}