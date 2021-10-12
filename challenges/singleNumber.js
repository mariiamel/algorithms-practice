

var singleNumber = function(nums) {
    let result;
    const obj = {};

    for (num of nums){
        if (!(num in obj)){
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }
    }
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if(obj[key] === 1){
            result = key;
        }
    })
    return result;
};


//O(N) Solution
var singleNumber = function(nums) {
    if(nums.length === 1) return nums;
    let map = {};

    for (let num of nums){
        map[i] = map[i] ? map[i] + 1 : 1;
    }
    for(let i in map){
        if(map[i] === 1) return i;
    }
};


// console.log(singleNumber([1, 1, 2]))