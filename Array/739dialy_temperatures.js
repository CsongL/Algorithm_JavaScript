var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = new Array();
    
    if(temperatures.length <= 1) return result;
    for(let i = 0; i< temperatures.length; i++){
        console.log(stack);
        console.log(stack.length);
        while(stack.length != 0 && temperatures[stack.length-1] < temperatures[i]){
            let numberIndex = stack.pop();
            result[numberIndex] = i - numberIndex;
            console.log(stack);
        }
        stack.push(i);
    }
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));