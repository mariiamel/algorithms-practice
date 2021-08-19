const l1 = [2,4,3]
const l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    let result = []
    let first = l1.reverse().join('')
    let second = l2.reverse().join('')
    //need to turn them into itegers
    let firstInt = parseInt(first)
    let secondInt = parseInt(second)
    // console.log(firstInt, '😇')
    // console.log(secondInt, '🥶')

    let sum = firstInt + secondInt
    sum = sum + ""
    result = sum.split("").reverse()
    // result.forEach(res => {
    //     parseInt(res)
    // })
    console.log(typeof result, '😇')
    // temp.map(eachInt => {
    //     eachInt = parseInt(eachInt)
    //     result.push(eachInt)
    //     return result
    // })
    
    //need to turn it back to string---reverse it back -- split and push to result


    return result;
};

addTwoNumbers(l1, l2)