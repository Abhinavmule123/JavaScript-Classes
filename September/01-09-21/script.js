// 1. encapulsation 
//2. inheritance
//3. Abstraction  
// 4. polymorphism - function show(a)   function show(a,b)
//5.class - Mobile , Electronics , Laptops , 
//6.object - 

// 1=> - 
// {
// a=10;
// b=20;
// c=30;
// dsddad
// }



// {
// a=10;
// d=10;
// e=10;
// }


// 2. inheritance 
// father -> sons 

//1st way // 
// let arr  = [1,2,3,4];

//2nd construtor - special type of function create and initialize object .
// let arr1 = new Array();
// console.log(typeof arr1);

// let Mobile = function(modelName){
//     this.modelName = modelName;
//     this.show = function(){
//         document.write(this.modelName);
//     }
// };

// // class - constructor / prototype 
// Mobile.prototype.color = "red";
// Mobile.prototype.display = function(){
//     document.write("this is display method");
// }
// let samsung = new Mobile("nokia");
// samsung.modelNo = 22;
// // document.write(samsung.modelName);
//  samsung.show();
// console.log(samsung);



//ES 6
//1. using class declaration 
class Mobile{
    constructor(model){
        this.model = model;
        this.show = function(){
            document.write(this.model);
        }
    }
    show1(modelName){
        document.write("this is show"+modelName);
    }
} 

let samsung = new Mobile("samsung");
samsung.show1("nokia");
