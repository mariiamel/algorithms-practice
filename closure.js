function fn(x) {
    return function(y){
        return x + y;
    }
}

let outer = fn(5);
console.log(outer(10)) // 15