function sortedSquares(nums) {
    return nums
        .map(num => {
            return num * num;
        })
        .sort((a, b) => a - b)
}

console.log(sortedSquares([-4,-1,0,3,10]))