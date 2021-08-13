// let student = {
//     name:"rahul",
//     class:1,
//     section : "B",
//     subject : ["math","science","eng"]
// };
// document.write(student.subject[0]);
// Boolean - 
// let ab = true;
// String :- 
// let ab = "hello";
// let ab = 'hello
//                 world';
// let ab = `hello
//         world`;
//string interploation 
// let num1  =20;
// let obj = {name:"rahul"};
// let arr = [1,2,3,4];
// let str  ="hello";
// let ab  = `number is ${num1} ${str} ${arr[0]} ${obj.name}`;
// document.write(ab+"<br>"); 
// document.write(`Number value is ${num1}`);  

// let num1 = 20;
// document.write(`number is ${num1}`);


// string methods
// 1. concat() : -
// let a = "hello";
// let b = "  world";
// let c = a.concat(b);
// console.log(c);
//2. charAt() : -
// let ab = "hello world";
// let position = ab.charAt(6);
// console.log(position);
//3. charCodeAt() : -
// let ab = "hello world";
// let machineCode = ab.charCodeAt(0);
// console.log(machineCode);
//4.toUpperCase()  and 5. toLowerCase() 
// let ab = "Hello World";
// let capital = ab.toUpperCase();
// let small = ab.toLowerCase();
// console.log(capital);
// console.log(small);
//6. trim() : 
// let ab  = "         hello world         ";
// let c = ab.trim();
// console.log(ab);
// console.log(c);
//7.indexOf() : -
// let ab = "hello worldh";
// let c = ab.indexOf("h",5);
// console.log(c);

//8. lastIndexOf() : -
// let ab = "hello worldh";
// let c = ab.lastIndexOf("h");
// console.log(c);

//9. search() : -
// let ab = "hello world";
// let c = ab.search("hii");
// console.log(c);

//10. match() : -
// let ab = "hello world";
// let c = ab.match("hello");
// if(c != null){
//     console.log("string present");
// }else{
//     console.log("string is not present");
// }

//11. slice() : -
// let ab = "hello world";
// let copyPortion = ab.slice(0,5);
// console.log(copyPortion);

//12. subtring() :- 
// let ab = "hello world";
// let copy = ab.substring(0,5);
// console.log(copy);

//13. substr() : -
// let ab = "hello world";
// let copy = ab.substr(6,5);
// console.log(copy);

//14.replace() : -
// let ab = "hello world";
// let c = ab.replace("hello","hii");
// console.log(ab);
// console.log(c);

//15. repeat() : -
// let ab = " hello world ";
// let c = ab.repeat(50);
// console.log(c);

//16.split() : -
// let ab = "hello world";
// let splitData = ab.split(" ");
// console.log(splitData[1]);

//17.includes() :-
// let ab = "hello world";
// let c  = ab.includes("hii");
// console.log(c);

//18. startWith  19. endWith
// let ab = "hello world";
// let c = ab.startsWith("world",6);
// console.log(c);
// let ab = "hello  world hii";
// let c = ab.endsWith("hii");
// console.log(c);