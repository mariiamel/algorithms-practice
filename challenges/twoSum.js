
const nums = [2,7,11,15]

//time compl - O(n * n)
//space compl - O(1)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let numToFind = target - nums[i]
        for(let j = i + 1; j < nums.length; j++){
            if(numToFind === nums[j]){
                return [i, j]
            }
        }
    }
    return null;
};

// console.log(twoSum(nums, 9))


//O(N) Solution
//store nums as a map to make search more efficient. Hash maps has lookups of O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)){
            return [i, map.get(num2)]
        }
        map.set(num1, i)
    }
};