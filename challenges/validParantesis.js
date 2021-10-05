
function validParant(str) {
    // To be valid, the string needs to contain PAIRS of values. If the string is not divisible by two, it can't be valid.
    if(str.length % 2 !== 0) return false;

    const stack = [];
    const obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for (let i of str){
        if(i === '(' || i === '{' || i === '['){
            stack.push(i);
        } else {
            const lastEl = stack.pop();
            if(i !== obj[lastEl]){
                return false;
            }
        }
    }
    /// If the stack is empty after all values have been iterated through, the string is valid.
    return stack.length === 0;
}

console.log(validParant('((())'))