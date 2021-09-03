//oop 
//1.encapsulation 
//2. Abstraction 
//3. polymorphism -  show(a) show(a,b) - 
//4. inheritance  - 
//5 class -  
//6 object - 

//constructor - special type of function jo create and initialize object 
// older ways
// let Mobile = function(modelName){
//     let modelNav = modelName;

//     this.modelNo = 22;
//     this.show = function(){
//         document.write(this.modelNav);
//     }
// };
// Mobile.prototype.color = "red";
// Mobile.prototype.display = function(){
//     document.write("this is prototype fun");
// }
// let samsung = new Mobile("samsung");
// document.write(samsung.modelNav);
// samsung.show();
// samsung.display();
// console.log(samsung);
// using array constructor 
// let arr =  new Array();

// latest ways // ES6
//1. class Declration 
//2. class expression 

// let Brands = class {
//     constructor(model){
//         this.modelName = model;
       
//         this.show = function(){
//             return this.modelName;
//         }
//     }
//     display(){
//         document.write("this is prototype method");
//     }
// }

// let samsung = new Brands("nokia");
// samsung.display();
// document.write(samsung.show());
// document.write(samsung.modelName);
// console.log(samsung);



// class Father{
//     constructor(paisa){
//         this.money = paisa;
//         this.show = function(){
//             return this.money;
//         }
//     }

//     display(){
//         document.write("this is father fun");
//     }
// }

// class Son extends Father{
//     constructor(money){
//         super(money);
//         this.display1 = function(){
//             document.write("this is son constuctor");
//         }
//     }
// }

// let f = new Father(1000);
// let s = new Son(2000);
// s.display();
// s.display1();

// class Mydate extends Date{

// }

// let tarikh = new Mydate();
// document.write(tarikh.getFullYear());


// varible hoisting

// class hoisting not avaiable  

// class Mobile{
//     static show(){
//         document.write("this is show method");
//     }
// }

// Mobile.show();

//method overiding 
// class Mobile{
//     show(){
//         document.write("this is mobile show method");
//     }
// }
// class Nokia extends Mobile{
//     show(){
//         document.write("this is nokia show method");
//     }
// }

// let nokia = new Nokia();
// nokia.show();