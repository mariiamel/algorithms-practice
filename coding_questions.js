// console.log(0.1 + 0.2 == 0.3, 'first'); //returns false(because we didnt use Math.floor)
// console.log(0.1 + 0.2, '0.33333');
//-----------------------------------------------------------------------


// var foo = 10 + '20'; 
// console.log(foo, 'concatenation'); // will return 1020
//-----------------------------------------------------------------------


// Question: How would you make this work?

// add(2, 5); // 7
// function add(first, second){
//     return first + second
// }
// console.log(add(2, 5)); // 7
 
// AND

// add(2)(5); // 7
// function add(first) {
//     return function(second){
//         return first + second
//     }
// }
// console.log(add(2)(5)) // 7
//-----------------------------------------------------------------------


// let someString = "i'm a lasagna hog".split("").reverse().join("");
// console.log(someString)
//-----------------------------------------------------------------------


// ( window.foo || ( window.foo = "bar" ) );
// console.log(window.foo)
// window.foo == "bar"
//-----------------------------------------------------------------------


// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};

// console.log(foo.x, 'foo.x') // undefined
// console.log(foo, 'foo') // { n: 2 }
// console.log(bar, 'bar') // { n: 1, x: { n: 2 } }
//-----------------------------------------------------------------------


// Question: What does the following code print?
// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');
// one, four , three, two 
//All of timeout and promise is async func.. 
//Answers is timeout in EventLoop Queue , promise process in JobQueue and JobQueue is high priority…
//-----------------------------------------------------------------------


//Question: What is the difference between these four promises?

// doSomething().then(function () {
//     return doSomethingElse();
//   });
  
//   doSomething().then(function () {
//     doSomethingElse();
//   });
  
//   doSomething().then(doSomethingElse());
  
//   doSomething().then(doSomethingElse);
//-----------------------------------------------------------------------


//   (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined')); //false a is not defined
//   console.log("b defined? " + (typeof b !== 'undefined') + b); //true b=3
//-----------------------------------------------------------------------


// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(foo1()) //{ bar: 'hello'}
// console.log(foo2()) // Undefined 
//-----------------------------------------------------------------------


// function f() {console.log(this.x)}
// var obj = {x: 'smth'}
// f.call(obj)
//-----------------------------------------------------------------------



// Should return { width: 10, height: 20}

// var arr = [
//     {name: 'width', value: 10},
//     {name: 'height', value: 20}
// ]

// let result = {};

// arr.forEach(el => {
//     return result[el.name] = el.value;
// })
// console.log(result)
//-----------------------------------------------------------------------


// let arr = [1, 1, 2, 3, 4, 4, 5]

//--1--
//const uniqueArr = arr => [...new Set(arr)]

// OR

// --2--
//var unique = arr.filter((el, i) =>{
//     return arr.indexOf(el) == i
// })
// console.log(unique)
//-----------------------------------------------------------------------



// function isPoli(str){
//     let first = 0
//     let last = str.length - 1;
//     while(first < last){
//         if(str[first] !== str[last]){
//             return false
//         }
//         first++;
//         last--;
//     }
//     return true;
// }

// console.log(isPoli('mom'))
// console.log(isPoli('hjvfytfv'))
//-----------------------------------------------------------------------


// var x = 10;

// (function (){
//     console.log(x)
//     var x = 25;
// }())
// will be UNDEFINED