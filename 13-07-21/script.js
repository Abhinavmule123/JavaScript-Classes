// function -  
// there two types of functions 
// 1. built in function
// 2. user - defined 

//  document.write() , 
//  window.alert() ,
//   console.log();

//how to create user defined function in js
// function display(name, sirname){
//     window.alert("hello world"+name+"  "+sirname);
// }

// display("abhinav","mule");

// function argunments / parameter

// rest parameter
// function add(num1,...args) {
//    document.write(num1,args[0])
// }

// add(10,20,30,40,50);

//default parameter
// function add(a=20,b=50){
//     var c = a+b;
//     document.write(a+" + "+b+"  =  "+c);
// }

// add(2,2);

// function add(a,b){
//     var c = a+b;
//     return c;
// }

// var result = add(10,10);
// document.write(result);





// Function Expression
// var show = function show(){
//     window.alert("hello world");
// };

// show();
// var show;
// show = function show(){
//     console.log("hello console");
// };
// show();

//Anonymous Function :  A function which does not have any name is called a.f.
// var show = function (a,b){
//    var c = a+b;
//    return c;
// };

// var result = show(10,20);
// window.alert(result);


// Arrow Function
// var show =  ()=> document.write("this is arrow function");
// show();

// var display = ()=>{
//     var check = window.confirm("are you sure ?");
//     if(check){
//         document.write("you clicked OK");
//     }
//     else{
//         document.write("You Clicked Cancel");
//     }
// };


// display();


