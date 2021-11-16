console.log(0.1 + 0.2 == 0.3, 'first'); //returns false(because we didnt use Math.floor)
console.log(0.1 + 0.2, '0.33333');
//-----------------------------------------------------------------------


var foo = 10 + '20'; 
console.log(foo, 'concatenation'); // will return NaN
//-----------------------------------------------------------------------


// let someString = "i'm a lasagna hog".split("").reverse().join("");
// console.log(someString)
//-----------------------------------------------------------------------


// window.foo || ( window.foo = "bar" );
// console.log(window.foo)
// window.foo == "bar"
//-----------------------------------------------------------------------


var foo = {n: 1};
var bar = foo;
// foo.x = foo = {n: 2};)˜()
// console.log(bar, 'bar') // { n: 1, x: { n: 2 } }
//-----------------------------------------------------------------------


// Question: What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');

// one, four , three, two 
//All of timeout and promise is async func.. 
//Answers is timeout in EventLoop Queue , promise process in JobQueue and JobQueue is high priority…
//-----------------------------------------------------------------------


//Question: What is the difference between these four promises?

doSomething().then(function () {
    return doSomethingElse();
});
  
doSomething().then(function () {
    doSomethingElse();
});
  
doSomething().then(doSomethingElse());
  
doSomething().then(doSomethingElse);
//-----------------------------------------------------------------------


  (function(){
    var a = b = 3;
  })();
  
//   console.log("a defined? " + (typeof a !== 'undefined')); //false a is not defined
//   console.log("b defined? " + (typeof b !== 'undefined') + b); //true b=3
//-----------------------------------------------------------------------


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// console.log(foo1()) //{ bar: 'hello'}
// console.log(foo2()) // Undefined 
//-----------------------------------------------------------------------


function f() {console.log(this.x)}
var obj = {x: 'smth'}
f.call(obj)
//-----------------------------------------------------------------------



// Should return { width: 10, height: 20}

var arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
]

let result = {};
arr.forEach(el => {
    return result[el.name] = el.value;
})
// console.log(result)
//-----------------------------------------------------------------------


let arr = [1, 1, 2, 3, 4, 4, 5]

//--1--
const uniqueArr = arr => [...new Set(arr)]

// OR

// --2--
var unique = arr.filter((el, i) =>{
    return arr.indexOf(el) == i
})
// console.log(unique)
//-----------------------------------------------------------------------


var x = 10;

(function (){
    console.log(x)
    var x = 25;
}())
// will be UNDEFINED
//-----------------------------------------------------------------------


//calculate only positive and Odd int
function calculator(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] % 2 !== 0){
            result += arr[i];
        }
    }
    return result;
}

// console.log(calculator([1, 3, 6, -2, 9, -6, 5]))
//-----------------------------------------------------------------------


function duplicate(arr) {
    return arr.concat(arr);
}
  
// console.log(duplicate([1, 2, 3, 4, 5]))
//-----------------------------------------------------------------------


// -- FIZZBUZZ --
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 ) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
//-----------------------------------------------------------------------

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
//-----------------------------------------------------------------------

const fileExtension = (fileName) => {
    if (typeof fileName !== 'string') {
        throw new Error('Invalid type of parameter')
    }
    let parts = fileName.split('.');
    return filename.length === 1 ? null : fileName[fileName.length - 1];
} 

// console.log(fileExtension("ref.fer.ted.ex")) // ex
// console.log(fileExtension("ex")) // null

