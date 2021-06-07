// how to get the index of sub_boxes  use the calculation boxes_index = (row/3)*3 + col/3;
//  uset hashtable to record each row and rach column
//  once found there already has the number, the function will return false
// 仅使用一次遍历就可以将其值记录在rowMap中， colMap中， box_Map
// 一旦发现现在遍历的值存在于rowMap, 或colMap 或boxMap中，那么这个函数就应返回false
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let n = board.length;
    let rows = new Array(9);
    let cols = new Array(9);
    let boxes = new Array(9);
    for(let i=0; i< n; i++){
        rows[i] = new Map();
        cols[i] = new Map();
        boxes[i] = new Map();
    }
    for(let i =0; i< n; i++){
        for(let j=0; j<n; j++){
            let char = board[i][j];
            let box_index = parseInt(i/3) *3 + parseInt(j/3);
            if(char != "."){
                let code = char.charCodeAt();
                if(!rows[i].has(code) && !cols[j].has(code) && !boxes[box_index].has(code)){
                    rows[i].set(code,1);
                    cols[j].set(code,1);
                    boxes[box_index].set(code, 1);
                }else{
                    return false;
                }
            }
        }
    }
    return true;
};