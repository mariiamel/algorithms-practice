// Return the maximum total number of units that can be put on the truck.
// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4   
//  Output: 8

// Time Complexity = O(nlogn) , because of using Sort method
// Space Complexity = O(1)

var maximumUnits = function(boxTypes, truckSize) {
    // sort the array based in the decreasing order of the number of units
    boxTypes.sort((box1, box2) => box2[1] - box1[1]);
    let maxUnits = 0;
    let currSize = 0;

    for(let [num, units] of boxTypes){
        if(truckSize === 0) return maxUnits;
        // if on adding the current boxtype and the trucksize is still not full,
		// add the boxes - update the size and maxUnits

        if(currSize + num < truckSize){
            currSize += num;
            maxUnits += num * units;
        }else{
            // if the truckSize is exceeded on adding all the boxes of the curr type, add only the remaining size number of units
            const remaining = truckSize - currSize;
            currSize += remaining;
            maxUnits += remaining * units;
        }
    }
    return maxUnits;
};

// console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));