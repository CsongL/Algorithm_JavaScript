/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
 var gridIllumination = function(n, lamps, queries) {
    const row = new Map();
    const col = new Map();
    const diagonal = new Map();
    const antDiagonal = new Map();
    const points = new Set();
    for(let lamp of lamps) {
        if(points.has(hash(lamp[0], lamp[1]))) continue;
        points.add(hash(lamp[0], lamp[1]));
        row.set(lamp[0], (row.get(lamp[0]) || 0) + 1);
        col.set(lamp[1], (col.get(lamp[1]) || 0) + 1);
        diagonal.set(lamp[0] - lamp[1], (diagonal.get(lamp[0] - lamp[1]) || 0) + 1);
        antDiagonal.set(lamp[0] + lamp[1], (antDiagonal.get(lamp[0] + lamp[1]) || 0) + 1);
    }
    const ret = new Array(queries.length).fill(0);
    for(let [i, [x, y]] of queries.entries()) {
        if(row.get(x) || col.get(y) || diagonal.get(x - y) || antDiagonal.get(x + y)) {
            ret[i] = 1;
        }
        for(let z = x - 1; z < x + 2; z++) {
            for(let j = y -1; j < y + 2; j++) {
                if(z < 0 || j < 0 || z >=n || j >= n || !points.has(hash(z, j))) {
                    continue;
                }
                points.delete(hash(z, j));
                row.set(z, row.get(z) - 1);
                col.set(j, col.get(j) - 1);
                diagonal.set(z - j, diagonal.get(z - j) - 1);
                antDiagonal.set(z + j, antDiagonal.get(z + j) - 1);
            }
        }
    }
    return ret;
};

function hash(x, y) {
    return '' + x + y;
}