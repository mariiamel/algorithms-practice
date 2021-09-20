
var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        const sum = nums[start] + nums[end]
        if(sum === target){
            return [start + 1, end + 1]
        } else if(sum < target){
            start++;
        } else if(sum > target){
            end--;
        }
    }
    return null;
};