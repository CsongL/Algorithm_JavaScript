/**
 * Time: 2021/05/11
 *  classic backtracking question 
 *  use the frame to solve the problem
 *  The fram is that 
 *      Firstly we should know the trace, the list of choice
 *      Secondlu, use the function to pepeat the process
 *      Importantly, we also need judge the choice is valid or not
 *      after each choice, we should remove the choice and continue to choice another selection
 */
const result = [];
var solveNQueens = function(n) {
    if(n==1){
        return [["Q"]]
    }
    let board = new Array(n);
    for(let i = 0; i < n; i++){
        board[i] = '.'.repeat(n);
    }
    backtrack(board, 0);
    return result;
};

var backtrack = function(board, row){
    if(board.length == row){
        result.push(board.slice()); // 存在拷贝问题， 数组也是引用类型，它们操作的都是同一快内存，而这块内存会不断地改变，因此应该将结果拷贝之后再放进result中
        return;
    }
    let n = board[row].length;
    
    for(let col = 0; col < n; col++){
        if(!isValid(board, row, col)) continue;
        board[row]=board[row].slice(0,col)+'Q'+board[row].slice(col+1);
        backtrack(board, row+1);
        board[row] = board[row].slice(0,col)+'.'+board[row].slice(col+1);
    }
}

function isValid(board, row, col) {
    for(let i = row-1; i >= 0; i--) {
        if(board[i][col] == 'Q'){
            return false;
        }
    }
    let n = board.length;
    for(let i= row-1, j = col+1; i >= 0 &&j <n; i--, j++){
        if(board[i][j] == 'Q'){
            return false;
        }
    }
    for(let i = row -1, j=col-1; i>=0 &&j>=0; i--, j--){
        if(board[i][j] == 'Q'){
            return false;
        }
    }
    return true;
}
console.log(solveNQueens(2));