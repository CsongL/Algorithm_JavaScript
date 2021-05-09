/**
 * Time: 2021/05/09
 * This question want to get the year has the most people
 * The question will give you an array that people birth year and death year
 * The function should return the year having most people
 * The link is : https://leetcode-cn.com/problems/maximum-population-year/
 * The solution:
 *      we should think about how to get the year having most people
 *     Firstly, we need to know each year has many people
 *     Secondly, we need to know which year has the most people
 *     Thirdly, we need to know how to get the year
 *     This question just like calculate the population 
 *     The population of this year add the the population of last year
 *
 */
/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
    const offest = 1950;
    let delta = new Array(101).fill(0);
    for(let i =0; i<logs.length; i++) {
        delta[logs[i][0]-offest] += 1;
        delta[logs[i][1]-offest] -= 1;
    }
    let max = 0;
    let curr = 0;
    let index = 0;
    for(let i =0; i<delta.length; i++) {
        curr += delta[i];
        if(curr > max) {
            max = curr;
            index = i;
        }
    }
    return index+offest;
};