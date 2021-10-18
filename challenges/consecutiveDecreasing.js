// You are given an array of ratings for n days. Find the number of groups that can be formed consisting of 1 or more consecutive days such that the ratings continously decreases over the days.
// The rating is consecutively decreasing if it has the form r, r - 1, r - 2 ... and so on, where r is 
//the rating on the first day of the group. Two groups are considered different if they contain the ratings of different consecutive days.
// Example
// ratings = [4,3,5,4,3] answer = 9
// there are 9 periods in which the rating is consecutively decreasing
// 5 one day periods: [4],[3],[5],[4],[3]
// 3 two day periods: [4,3], [5,4], [4, 3]
// 1 three day period: [5, 4, 3]

// ratings = [2, 1, 3] answer = 4
// groups are [2],[1], [3], [2, 1]

function consecutiveDecreasing(arr) {
    if (arr.length == 0)
      return 0;
  
    let left, right, total = 0;
  
    for (let i = 0; i < arr.length; i++) {
      left = i, right = i;
      while (i < arr.length - 1 && arr[i] - arr[i + 1] == 1) {
        i++;
        right = i;
      }
      let sequenceSize = right - left + 1;
      total += (sequenceSize * (sequenceSize + 1)) / 2;
    }
    return total;
}

//or
function Run(nums) {
	var sum = 1;
	var prev = 1;
	for(var i = 1; i < nums.Length; i++) {
		if(nums[i - 1] == nums[i] + 1) {
			sum += prev + 1;
			prev++;
		} else {
			prev = 1;
			sum++;
		}
	}
	return sum;
}

//or
function countSequences(ratings) {
    let count = 0;
    let current = 0;
    for (let i = 0; i < ratings.length; i++) {
        if (i == 0 || ratings[i - 1] - ratings[i] == 1) {
            current++;
        }
        else {
            count += getTriangleNumber(current);
            current = 1;
        }
    }
    
    count += getTriangleNumber(current);
    return count;
}

function getTriangleNumber(n) {
    let sum = 0;
    while (n != 0) {
        sum += n;
        n--;
    }
    return sum;
}