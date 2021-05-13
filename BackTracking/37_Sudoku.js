/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    backtrack(board, 0, 0);
};

function backtrack(board, i, j){
    if(i==9) {
        return true;
    }
    if(j==9){
        return backtrack(board, i+1, 0);
        
    }
    if(board[i][j] != '.'){
        return backtrack(board, i, j+1);
    }
    for(let ch ='1'; ch <= '9'; ch++){
        if(!isValid(board, i, j, ch.toString())) continue;
        board[i][j] = ch.toString();
        if(backtrack(board, i, j+1)){
            return true;
        }
        board[i][j] = '.';
    }
}
function isValid(board, row, col, ch){
    for(let i =0; i<9; i++){
        if(board[row][i] == ch) {
            return false;
        }
        if(board[i][col] == ch) {
            return false;
        }
        let _row = parseInt(row/3)*3+parseInt(i/3);
        let _col = parseInt(col/3)*3+i%3;
        if(board[_row][_col] == ch) 
        {

            return false;
        }
    }
    return true;
}
let boards = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(boards);
console.log(boards);

// console.log(0/3*3+0/3)
// let board = [["5","3",".",".","7",".",".",".","."]]
// console.log(typeof board[0][1])