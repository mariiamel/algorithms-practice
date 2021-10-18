

// Time Complexity: O(N log N)
// Space Complexity: O(N)

var arrayRankTransform = function(arr) {
    if(!arr) return [];
    if(arr.length === 1) return [1];

    // Make a copy of the array and sort it
    let sortedArr = [...arr].sort((a, b) => a - b);

    let map = {};
    let rank = 1;
    let rankArr = [];

    // Assign ranks of key-value pairs, arrayVal: index
    for(let i = 0; i < sortedArr.length; i++){
       if(!map[sortedArr[i]]){
           map[sortedArr[i]] = rank;
           rank++;
       }
    }
    // transform the original array into ranks and return the result
    for (let j = 0; j < arr.length; j++){
        rankArr.push(map[arr[j]])
    }

    return rankArr;
};

// console.log(arrayRankTransform([40,10,20,30])) // => [ 4, 1, 2, 3 ]
// console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])) // => [5,3,4,2,8,6,7,1,3]