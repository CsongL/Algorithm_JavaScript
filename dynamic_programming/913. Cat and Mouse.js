// dp 动态规划   dp[mouse, cat, turnks] 这个dp数组表示的值就是mouse在在这个位置，猫在这个位置，走了多少步之后的结果
// 刚开始求的老鼠是在位置1， 猫的位置是在2， 走的步数还是0，这个就要取决于之后那些步骤， 
// 因此其实也就是dfs，深度搜索

const MOUSE_WIN = 1;
const CAT_WIN = 2;
const DRAW = 0;

const catMouseGame = function (grap) {
    this.n = graph.length;
    this.graph = graph;
    this.dp = new Array(n).map(() => new Array(n).map(() => new Array(n * n).fill(-1)));
    return getResult(1, 2, 0);
}

function getResult(mouse, cat, turns) {
    if(turns === n * n) {
        return DRAW;
    }
    if(dp[mouse][cat][turns] < 0) {
        if(mouse === 0) {
            dp[mouse][cat][turns] = MOUSE_WIN;
        } else if (mouse === cat) {
            dp[mouse][cat][turns] = CAT_WIN;
        } else {
            getNextResult(mouse, cat, turns);
        }
    }
    return dp[mouse][cat][turns];
}

function getNextResult(mouse, cat, turns) {
    let curMoves = turns % 2 === 0 ? mouse : cat;
    let defaultResult = curMoves === mouse ? CAT_WIN : MOUSE_WIN;
    let result = defaultResult;
    let nextNodes = graph(curMoves);
    for(let node of nextNodes) {
        if(curMoves === cat && node === 0) {
            continue;
        }
        const nextMouse = curMoves === mouse ? node : mouse;
        const nextCat = curMoves === cat ? node : cat;
        const nextResult = getResult(nextMouse, nextCat, turns + 1);
        if(defaultResult != nextResult) {
            result = nextResult;
            if(result === DRAW){
                break;
            }
        }
    }
    dp[mouse][cat][turns] = result;
}
