//* arrow function
// var arr = [1,2,3,4,5,6,7,8];
// const data = arr.map(a=>{
//     console.log(a,"inside function")
// });


// *optional chaining
// *in optional chaining complete object is missing then return a error,
// *if object is missing in optional chaining return undefined and in normal syntax return error object is missing

// var obj = {
//     person:{
//         // batch:{
//         //     // name:"furqan",
//         //     age:"24",
//         //     profession:"programmer"
//         // }
//     }
// };

// console.log(obj?.person?.batch?.name)


// * Asynchronous callback function

// function greeting(name){
// alert (`Hello ${name}!`);

// }

// function processUserInput(callback){
//     const name = prompt("Enter your name");
//     callback(name);
// }

// processUserInput(greeting);


// function data(name){
//     alert(`hello ${name}`)
// }


// function subFunction(callback){
//     const name  = prompt("enter your name");
// callback(name);
// }


// subFunction(data);


// const funA = (name) => { 
//     setTimeout(function(){
//         alert(`name ${name}`)
//         },1000);
// }



// const funB = () => { 
//     setTimeout(function(){
//         var a = prompt("Enter your name");
//         funA(a);
//         },3000)
// }

// funB();


// *closures

// var sum = function(a){
//     console.log("live viewers",+ a)
//      c=4;
//     return function (b){
//         return a+b+c
//     }

// }
// var store = sum(2);
// console.log(store(3))



// * not using var , let and const and declare a variable the value scope is globally

// function myFunction() {
//     a=4
// }
// myFunction()
// console.log(a);



// *Hoisting

// javascript default behavior variable get on top on the code...

//  x= 5;
// console.log(x);

//  var x;

// *lexical scope

//  inner function can use parent variable 
// but parent function cant't use child variable


// *implicit return javascript
//  If a JavaScript arrow function immediately returns a value, writing
//  return is optional (if we also remove the curly brackets).
//  The return is then implied, making it an “implicit return”.

// in simple words in normal function if you cannot use return then result 
// is undefined and if you can use arrow functions and return a multiple 
// statement then need return other wise a single statement you cannot a 
// use a return or butterfly brackets.



// *Promises
var a = 10;
var b = 20;
let promises = new promises(function(resolve, reject) {
    if(a<b)
})

















