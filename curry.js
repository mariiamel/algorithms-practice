
const add1 = (a, b) => a + b;

const add2 = (a) => (b) => a + b;

const addAllWays = (a, b) => {
    if (b !== undefined) return a + b;
    return (c) => a + c;
}

// console.log(add1(2, 5))
// console.log(add2(2)(5))
// console.log(addAllWays(2)(5))
// console.log(addAllWays(2, 5))