/**
 * Time: 2021/05/04
 * always remeber the princlipe how to judge whether there is a well-formed parentheses
 *      two aspect: firstly, a well-formed parentheses means that the number of left parenthese equal with right parenthese
 *                  secondly,  in the sub string [0....i] the number of left parenthese should be larger than the number of right parenthese
 *                              or the number of left parenthese should equal with the number of right parenthese
 */
/** give the n, return all well-formed string which has n well-formed parenthese
 * @param {number} n
 * @return {string[]}
 */
let result = []
var generateParentheses = function(n) {
    let track = "";
    result = [];
    backtrack(n, n, track);
}

function backtrack(left, right, track){
    if(left < 0 || right <0) return ;
    if(right < left) return ;
    if(left == 0 && right == 0){
        result.push(track);
        return;
    }

    track = track + '(';
    backtrack(left-1, right, track);
    track = track.substr(0, track.length-1);

    track = track + ')';
    backtrack(left, right-1, track);
    track = track.substr(0, track.length -1);
}