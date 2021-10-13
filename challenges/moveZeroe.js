var moveZeroes = function(nums) {
    if(nums.length === 1) return nums;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes([1, 3, 0, 3, 0, 12]));