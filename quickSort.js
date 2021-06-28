
//O(log2n * n)
const array = [1, 3, 5, 6, 2, 4, 8, 11, 23, 12, 56, -5, 34]
let count = 0;

function quickSort(array){
    if( array.length <= 1){
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i ++){
        count+=1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        }else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(array))
console.log(array.length)
console.log(count)
//O(n * n)