
var missingNumber = function(nums) {
    if(!nums || nums.length < 1) return null;
     nums = nums.sort((a, b) => a - b)
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) {
        return i;
    }
  }
};

console.log(missingNumber([3, 0, 1]))// => 2
//Or Input: nums = [9,6,4,2,3,5,7,0,1] Output: 8