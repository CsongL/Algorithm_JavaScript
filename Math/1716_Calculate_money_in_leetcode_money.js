/**
 * 
 * @param {number}
 * @return {number}
 */

function totalMoney(n) {
    let weekNumber = Math.floor(n / 7);
    let firstWeekMoney = 7 * (1 + 7) / 2;
    let lastWeekMoney = firstWeekMoney + 7 * (weekNumber - 1);
    let result = weekNumber * (firstWeekMoney  + lastWeekMoney) / 2;
    let dayNumber = n % 7;
    let firstDay = weekNumber + 1;
    let lastDay = firstDay + dayNumber - 1;
    result += (firstDay + lastDay) * dayNumber / 2;
    return result;
}

console.log(totalMoney(45));  // 297