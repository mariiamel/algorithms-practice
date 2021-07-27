const arr = [1,1,2,2,3,4,4,5,6,6,7,7,8,8,9]

function withoutRepeat(arr){
    const result = []
    const obj = {}

    for (let i = 0; i <= arr.length; i++){
        let current = arr[i]
        if (!(current in obj)){
            obj[current] = 1;
        } else {
            obj[current] += 1;
        }
    }
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if(obj[key] === 1){
            result.push(key)
        }
    })
    return result;
}

withoutRepeat(arr)
