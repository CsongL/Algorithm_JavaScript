/**
 * @param {number[][]} courses
 * @return {number}
 */
let result = 0;
var scheduleCourse = function(courses) {
    courses.sort((a, b) => a[1] - b[1]);
    let queue = [];
    let total = 0;

    for(let i = 0; i < courses.length; i++) {
        let time = courses[i][0], ddl = courses[i][1];
        if(time + total <= ddl) {
            queue.push(time);
            total += time;
        } else if(queue.length != 0 && Math.max(...queue) > time) {
           let maxTime = Math.max(...queue); 
            total = total - maxTime + time;
            queue.splice(queue.indexOf(maxTime), 1);
            queue.push(time);
        }
    }
    return queue.length;                                   
};
