/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let items = path.split('/');
    let stack = [];
    for(let name of items) {
        if(name === '..') {
            if(stack.length) {
                stack.pop();
            }
        } else if(name.length && name != '.') {
            stack.push(name);
        }
    }
    return '/' + stack.join('/');
};