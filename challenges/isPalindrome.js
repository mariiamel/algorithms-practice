
// two pointers solution

function isPoli(str){
if(str.length === 1) return true;
    let first = 0
    let last = str.length - 1;
    while(first < last){
        if(str[first] !== str[last]){
            return false
        }
        first++;
        last--;
    }
    return true;
}

console.log(isPoli('mom'))
console.log(isPoli('hjvfytfv'))