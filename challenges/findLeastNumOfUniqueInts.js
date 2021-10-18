
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();

    arr.forEach(num => map.set(num, map.get(num) + 1 || 1));
    
    let occurrences = Array.from(map.values());

    occurrences.sort((a,b) => a - b);

    let result = occurrences.length;

    for (let num of occurrences) {
        if (k >= num) {
            k -= num;
            result--;
        }
        else return result;
    }
    return result;
};
// Time Complexity - O(nlog(n))
// Space Complexity - O(n)


//OR almost the same
var findLeastNumOfUniqueInts = function(arr, k) {
    let obj = {};
    let i = 0;

    for (let num of arr){
        obj[num] = obj[num] + 1 || 1;
    } 
    let keysSorted = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);

    while (k) {
      if (obj[keysSorted[i]] > k) return keysSorted.length - i;
      k -= obj[keysSorted[i]];
      i += 1;
    }
    return keysSorted.length - i;
};