
var removeDuplicates = function(nums) {
    if(nums.length === 1) return nums.length;
    
    for(let i = 1; i < nums.length; i++){
        const prevValue = nums[i-1];
        const currentValue = nums[i];
        
        if(prevValue === currentValue){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([3])) 