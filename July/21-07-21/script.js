// Number 
//primitive way
//let num1 = 23;
//constructor way 
// let num2 = new Number(30);
// document.write(num1,num2);

// let num2 = 20.2020;
// //let num3 = 784384e^4;   // e^4 = 10^4
// let num4 = "123";
// document.write(typeof num4);

//  let a = 10; // number   
//  let b = "20"; // string 
// // let c = 10; // number 
// let d = "hello";
// document.write(a+b+c+"<br>");
//  document.write(a-b+"<br>");  // number-string  
// document.write(a-d); // NAN
// let c  = 5e3;  // 5000  = 5*10^3 = 5000
// let d  = 5e-4   // 0.0005  // 5*10^-4  = 0.0005


// NAN  -- Not A Number - hello =  NAN!=NAN

// global isNAN() :-  valid number - false,  not valid number -  true,
// let ab = 20;  // valid number 
// let ac = "hello";  // not valid number
// let cd = "30"; // valid number   
// document.write(isNaN(cd)); 

        // Number Methods
//4t4i
//1.toString() : - syntax : -variable_name.toString();
// octal-8 ,hexadecimal-16 ,  binary - 2   
// let num1 = 10;
// document.write(typeof num1+"<br>");
// let num2 = num1.toString();
// document.write(num2);

//2.toExponential() :-
// let ab = 588328.32738;
// let exno = ab.toExponential(20);
// document.write(exno);

// 3.toFixed() :-
// let num1 = 3232.56565;
// let num2 = num1.toFixed(10);
// document.write(num2);

//4.toPrecision() : -
// let num1 = 3232.564737;
// let num2 = num1.toPrecision(20);
// document.write(num2);


//5. isInteger() : - 364783268736873648326483264832648328332288237283
//document.write(Number.isInteger(364783268736873648326483264832648328332288237283));

//6 isSafeInteger() : -limit-  2^53 to -2^53 
// document.write(Number.isSafeInteger(100));

//7.isFinite() : -  
// let a = 5;  
// let check = Number.isFinite(a);
// if(check){
//     alert("number is finite");
// }
// else{
//     alert("number is infinite");
// }

//8. isNAN() :-
// let ab = "hello";
// document.write(Number.isNaN(ab));

// Infinity , -Infinity
// let ab = 5/0;
// if(ab == Infinity){
//     alert("Number is too large");
// }
// else if(ab == -Infinity){
//     alert("Number is too small")
// }else{
//     alert("Number is normal");
// }


// 1. Number
// let ab = "20";
// document.write(typeof ab+"<br>");
// let convertIntoNum = Number(ab);
// document.write(typeof convertIntoNum);

//1. parseInt() :-
// let ab = "20.30";
// document.write(typeof ab+"<br>");
// let convertIntoNum = parseInt(ab);
// document.write( convertIntoNum);

//3. parseFloat() :-
// let ab = "20.35";
// document.write(typeof ab+"<br>");
// let convertIntoNum = Number(ab);
// document.write( convertIntoNum);

// math
// 1.min and max
//document.write(Math.min(33,1,55,99,667,3));
//document.write(Math.max(33,1,55,99,667,3));

//3.floor //4.round
// let ab = 2.5;
// //document.write(Math.floor(ab)); 
// document.write(Math.round(ab));

//5. pow and 6. sqrt
// document.write(Math.pow(2,2)+"<br>");
// document.write(Math.sqrt(64));

//7. random

// document.write(Math.random());

// document.write(Math.round(Math.random()*10000));