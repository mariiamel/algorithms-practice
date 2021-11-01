
const numIslands = (grid) => {
    let islands = 0;
    for(let row in grid){
        for(let col in grid[row]){
            if (grid[row][col] === '1'){
                islands++;
                // do not forget to turn row and col into integers
                turnToWater(parseInt(row), parseInt(col), grid);
            }
        }
    }
    return islands;
}

const turnToWater = (rowInd, colInd, grid) => {
    // recursion conditions 
    if (grid[rowInd] === undefined || grid[rowInd][colInd] === undefined || grid[rowInd][colInd] === '0') return;
    // switch island to water;
    grid[rowInd][colInd] = '0';
    // down
    turnToWater(rowInd+1, colInd, grid);
    // up
    turnToWater(rowInd-1, colInd, grid);
    // right
    turnToWater(rowInd, colInd+1, grid);
    // left
    turnToWater(rowInd+1, colInd-1, grid);
}


console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));