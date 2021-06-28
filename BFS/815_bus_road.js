/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
 var numBusesToDestination = function(routes, source, target) {
    if(source == target) return 0;
    if(routes.length == 1 && routes[0].indexOf(target) != -1) return 0;
    if(routes.length == 1 && routes[0].indexOf(target) == -1) return -1;

    let queue = new Array();
    let visited = new Array();
    let step = 1;
    for(let i=0; i<routes.length; i++){
        // if(routes[i].indexOf(source)!=-1 && routes[i].indexOf(target)!= -1) return ;
        if(routes[i].indexOf(source) != -1){
            queue.push(routes[i]);
            visited.push(routes[i]);
        }
    }
    while(queue.length != 0){
        let queueLen = queue.length;
        for(let i=0; i< queueLen; i++){
            let arr = queue.shift();
            if(arr.indexOf(target)!=-1) return step;
            for(let j=0; j<arr.length; j++){
                let item = arr[j];
                for(let k=0; k<routes.length; k++){
                    if(routes[k].indexOf(item) != -1&& visited.indexOf(routes[k]) ==-1){
                        queue.push(routes[k]);
                        visited.push(routes[k]);
                    }
                }
            }
        }
        step++;
    }
    return -1;
};

let a = numBusesToDestination([[1,2,7],[3,6,7]],1,6);
console.log(a);