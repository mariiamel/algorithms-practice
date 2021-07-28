
function matchBrackets(str) {
    const stack = [];
    const obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for (let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            stack.push(str[i]);
        } else {
            const lastEl = stack.pop();
            if(str[i] !== obj[lastEl]){
                return false;
            }
        }
    }
    if(!stack.length){
        return true;
    } else {
        return false;
    }
}

// console.log(matchBrackets('()'))