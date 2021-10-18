

var kClosest = function(points, k) {
    if (!points) return [];
    let result = [];
    let map = {};
    //  distance formula - ((x1-x2)^2 + (y1-y2)^2)

    // O(nlogn) where n is no of points in input
    for(let point of points){
        map[point] = Math.sqrt((point[0] - 0) ** 2 + (point[1] - 0) ** 2);
    }

    let sorted = Object.keys(map).sort((a, b) => {
        return map[a] - map[b];
    })

    // loop through the sorted array and push values to result array, separeted by comma
    
    for(let i = 0; i < sorted.length; i++){
        result.push(sorted[i].split(','));
    }
    
    // slice the sorted points array to get k elements
    return result.slice(0, k);
};