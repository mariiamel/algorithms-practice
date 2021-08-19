const array = [1, 3, 5, 6, 2, 4, 8, 11, 23, 12, 56, -5, 34]
let count = 0;

function selectionSort(array){
    for (let i = 0; i < array.length; i++){
        let indexMin = i
        for (let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j
            }
            count += 1
        }
        let temp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = temp
        //OR array.swap(i, indexMin)
    }
    return array
}

console.log(selectionSort(array))
console.log(array.length)
console.log(count)
//O(n*n)