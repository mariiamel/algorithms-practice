const array = [2, 5, 4, 8, 6, 3, 11]

function linearSearch(array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 4))
