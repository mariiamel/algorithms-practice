
//Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

//By declaring Set() would the time complexity be O(N) 
//because javascript would iterate throughout the whole numsArray before adding it to the set
var containsDuplicate = function(nums) {
    if(nums.length === 1) return false;
    let set = new Set(nums);
    if(set.size !== nums.length){
        return true;
    };
    return false;
};

// console.log([1,1,1,3,3,4,3,2,4,2]) // => true
// console.log([1,2, 3, 4, 5]) // => false