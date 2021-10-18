// Givn an array of letgers determine the number of ways the entire array can be split leto two non empty sub arrays 
// left and right such that the sum of elements in the left subarry is greater than the sum of the eleents of right subarray

function waysToSplitArray(nums){
    let sum = 0;
    let leftSum = 0, rightSum = 0, count = 0;
    
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    for(let i=0;i<nums.length-1;i++){
        leftSum+=nums[i], rightSum = sum-leftSum;
        if(leftSum > rightSum){
            count++;
        }
    }
    return count;
}