// functions  
// function display(){
//     document.write("hello world");
// }

// display();
// 1. takes nothing , return nothing
// 2. takes something ,  return nothing
//3. takes nothing ,  return something
// 4. takes something ,  return something

// function add(a,b){
//     var c = a+b;
//     return c;
// }
// var result = add(2,3);
// document.write(result);


// Function Expression 
// var display = function show(name){
//     window.alert("hello"+name);
// };
// display("rahul");

// Anonymous Function
// var display = function (){
//     document.write("hello");
// };

// function show(fun){
//     return fun();
// }
// document.write(show(function(){ 
//     return "hello world";
// }));

// Arrow functions

// var display = ()=>document.write("display");
// display();

// IIFE - Immediately invoked function expression 
// () - grouping operator 

// (function (){ document.write("IIFE");})();

// Advantage 
// 1. name conflict 
// 2. local variable 

// JavaScript Scopes of variables
// 1. Global Scope 
// 2.  Local Scope



// var name = "abhinav";  // Global 
// function show(){
//     var sirname = "mule";  // local scope 
//     document.write(name,sirname);
// }
// show();
// document.write(sirname);

// function fun1(){
//     var num1 = 10;
//     document.write(num1);
//     function fun2(){
//         var num2 = 20;
//         document.write(num2,num1);
//     }
//     // document.write(num2);
// }
// fun1();
// fun2();


// var num1 = 10;  // global scope

// function fun1(){
//     var num1 = 20;   // local scope  // 1st priority to local scope variable .
//     document.write(num1);  
// }
// fun1();

// document.write(num1);  

//     var num2 = 30; 
//     var num1  = 50;
   
// function fun1(){
//     var num1;
//     num1=20;
//     document.write(num1+"<br>"+num2+"<br>");  // 20  , 30   // 20 30 
// }
// fun1();
// document.write(num1+"<br>"+num2);  // 50 ,30  //50 30 

// Variable hoisting

// var name = "abhinav";
// document.write(name);
// var sirname = "mule";
// document.write(sirname); 

// at the time of compile phase.
// var name;
// var sirname;
// name = "abhinav";
// document.write(name);
// sirname = "mule";
// document.write(sirname); 

// var num1 = 12;
// var num1= 30;
// alert(num1);
// var     -    it is possible  ,  can change , it can be hoisted , function level scope
// let     -  redeclare not possible ,  can change ,  not be hoisted , block level scope
// const   -   redeclare not possible ,  value does not change ,  not be hoisted , block level scope.
// const pi = 3.14;
// pi = 2.14;
// let pi = 3.14;
// pi = 2.14;
// document.write(pi);

// var   -  function scope
// let  , const  , block scope

// function fun1(){
//     var num1 = 30;  
//     document.write(num1);
// }
// fun1();
// document.write(num1);

if(true){
    const num1 = 30; 
    document.write(num1);
}
document.write(num1);













