
//BFS solution

var findTreasure = function(grid) {
   
    let queue = [];
    let directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];
    let rows = grid.length;
    let col = grid[0].length;
    let steps = 0;
    queue.push([0, 0]);
    while (queue.length) {
        steps++;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [sr, sc] = queue.shift();
            for (let [dr, dc] of directions) {
                let qr = sr + dr;
                let qc = sc + dc;

                if (qr >= 0 && qr <  rows && qc >= 0 && qc < col) {
                    if (grid[qr][qc] === "X") {
                        return steps;
                    }
                    if (grid[qr][qc] === "O") {
                        grid[qr][qc] = "D";
                        queue.push([qr, qc]);
                    }
                }
            }
        }
    }
    return -1;
}