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