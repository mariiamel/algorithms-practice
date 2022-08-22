

const palindromeNumber = (num) => {
    if (num < 0) return false;

    const number = num.toString().split('');

    let first = 0,
        last = number.length - 1;
    
    while (first < last) {
        if (number[first] !== number[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
}

console.log(palindromeNumber(10)); // false
console.log(palindromeNumber(121)); // true
console.log(palindromeNumber(-121)); // false