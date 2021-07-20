// var     - can change , redeclartion  of variable possible , function level scope ,  follow variable hoisting conecept
// let     - can change ,  not possible , block scope , not follow variable hoisting conecept
// const   -  can not change value of variable , not possible , block level scope ,not follow variable hoisting conecept

// var num1 = 20;  // global scope 

// function add(){
//     var num2 = 30; 
//     let num3 = 40;   // local scope
//     document.write(num2);

// }

// if(true){
//      const num3 = 40;          // block level scope 
//      document.write(num3);
// }

// document.write(num3);

// variable hoisting  --  at the time compile phase declaration goes at top .
// var a=10;                           during compile phase 
// document.write(a);                   var a;
//                                     var b;
// var b=20;                             a=10;
// document.write(b);                 document.write(a); document.write(b); 


// var a = {name:"abhinav"};
// document.write(typeof a);

// undefined and null
// let a=30;
// if(a== undefined){
//     window.alert("a is undefined");
// }
// else{
//     window.alert(a);
// }

// null 
// var a = "hello";
// if(a == null){
//     window.alert("a is empty");
// }
// else{
//     window.alert(a);
// }

// Array  --  
// let num1 = 30;  m.a - 3000  5000
// let num2 = 40;  m.a - 2000  1000 
// using array literal 
  //              0           1       2
// let subject  = ["science","math","english"];
// subject  -> 1001        1002        1003     
//             subject[0]  subject[1]  subject[2]

// var a ="array";
// document.write(typeof subject);

// using array constructor 
//  let array_name  = new Array(10);
// console.log(array_name);
 //               0       1       2     3  4  5
let student = ["rahul","raj","rohan",12,34,555];

// student[0] = "soham";

// delete student[2];
 const arr_length  = student.length;
//document.write(student);

// for(let i=0;i<arr_length;i++){
//     document.write(student[i]+"<br>");
// }

// let i=0;
// while(i<arr_length){
//     document.write(student[i]+"<br>");
//     i++;
// }

// let i=0;
// do
// {
//     document.write(student[i]+"<br>");
//     i++;
// }while(i<arr_length);




