

var numIslands = function(grid) {
    if(!grid || grid.length === 0) return null;
    let islands = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){

            if(grid[i][j] === '1'){
                islands++;
                bfs(grid, i, j);
            }
        }
    }
    return islands;
};


let bfs = function (grid, i, j){
    let col = grid[i];
    let row = grid[j];
    
}






numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ])