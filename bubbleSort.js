const array = [1, 3, 5, 6, 2, 4, 8, 11, 23, 12, 56, -5, 34]
let count = 0;

function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j+1] < array[j]){
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            count+=1
        }
    }
    return array
}


console.log(bubbleSort(array))
console.log(array.length)
console.log(count)
//O(n * n)