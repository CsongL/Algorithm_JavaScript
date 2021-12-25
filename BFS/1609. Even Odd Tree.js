var isEvenOddTree = function(root) {
    let lever = 0;
    let arr = new Array();
    arr.push(root);
    console.log(arr)
    while(arr.length) {
        let n = arr.length;
        let flag = lever % 2 === 0 ? 1 : 0;
        let val = lever % 2 === 0 ? 0 : Math.pow(10, 6) + 1;
        for(let i = 0; i < n; i++) {
            let node = arr.shift();
            if(((flag && node.val % 2 === 1)  && val < node.val) || ((!flag && node.val % 2 === 0) && val > node.val)) {
                if(node.left) arr.push(node.left);
                if(node.right) arr.push(node.right);
                val = node.val;  
            } else {
                return false;
            }
        }
        lever++;
    }
    return true;
};