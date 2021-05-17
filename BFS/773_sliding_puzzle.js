/**
 * Time: 2021/05/17
 * Fistly, we should notice the property of this question
 * Then, we need to decide that which algothirm we should use
 * In addition, in order to use the algothrim we have choose, the BFS, we need to reconstruct the question
 * This question can use the BFS to solve, but we need to analyze the question nd reconstruct the question
 * /
/**
 * the size of board is fixed, row == 2, column == 3
 * @param {number[][]} board
 * @return {number}
 */
 var slidingPuzzle = function(board) {
    let row = 2, column = 3;
    let start = "";
    let target = "123450";
    let step = 0;
    for(let i =0; i < row; i++){
        for(let j = 0; j < column; j++){
            start +=board[i][j];
        }
    }
    let boardPosition = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4]
    ]
    let q = new Array();
    let visited = new Array();
    q.push(start);
    visited.push(start);
    while(q.length!=0){
        let size = q.length;
        for(let i = 0; i < size; i++){
            let curr = q.shift();
            let index = 0;
            if(curr == target){
                return step;
            }
            for(;curr[index]!=0; index++);
            let adjanct = boardPosition[index];
            for(let elem of adjanct){
                let newBoard = curr;
                let temp = newBoard[index];
                newBoard = newBoard.slice(0, index) + newBoard[elem] + newBoard.slice(index+1);
                newBoard = newBoard.slice(0, elem) +temp + newBoard.slice(elem+1);
                if(visited.indexOf(newBoard) == -1){
                    q.push(newBoard);
                    visited.push(newBoard);
                }
            }
        }
        step++;
    }
    return -1;

};
console.log(slidingPuzzle([[1,2,3],[4,0,5]]));