
//Leetcode
var fizzBuzz = function(n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        let curr = i;
        if(curr % 15 === 0){
           answer.push("FizzBuzz"); 
        } else if(curr % 3 === 0){
          answer.push("Fizz");  
        } else if(curr % 5 === 0){
          answer.push("Buzz");  
        } else {
            answer.push(`${curr}`);
        }
    }
    return answer;
};

console.log(fizzBuzz(3))// => ["1","2","Fizz"]


//Classic way
for (let i = 1; i <= 100; i++) {
    if(i % 15 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    } else if(i % 5 === 0 ){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}