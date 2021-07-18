// 1. push ()  : - 
// let ab = [1,2,3,4,5];
// let arr_length = ab.push(7,8,9);
// console.log(arr_length);

//2. pop () :-
// let ab = [1,2,3,4,5];
// let delElement = ab.pop();
// console.log(delElement);

//3. unshift() :- 
// let ab = [1,2,3,4,5];
// let arr_length = ab.unshift(7,8,9);
// console.log(arr_length);

//4 . shift() :- 
// let ab = [1,2,3,4,5];
// let deleted_element = ab.shift();
// console.log(deleted_element);

//5. concat():- 
// let ab = ["rohan","raj"];
// let cd = ["soham","ram"];
// let new_arr = ab.concat(cd,1,2,3);
// console.log(new_arr);

//6.join() : -
// let ab = [1,2,3,4,5];
// let new_arr = ab.join(" and ");
// console.log(new_arr);

//7.fill() : -
      //   0 1 2 3 4 5
// let ab = [1,2,3,4,5,6];
// let new_arr = ab.fill("rohan",1,5);
// console.log(new_arr);

//8.reverse() : -
// let ab = [1,2,3,4,5,6];
// ab.reverse();
// console.log(ab);

//9.toString ():- 
// let ab = [1,2,3,4,5];
// let new_arr = ab.toString();
// console.log(new_arr);

//10.Array.isArray() :-
// let ab = 1112;
// let x = Array.isArray(ab);
// console.log(x);

//11. slice() :- 
//       -10  -9  -8   -7  -6  -5  -4  -3  -2 -1
//        0 1 2 3 4 5 6 7 8 9 
// let ab = [1,2,3,4,5,6,7,8,9,10];
// let new_arr = ab.slice(-7,-3);
// console.log(new_arr);

//12. splice() :-
// let ab = [1,2,3,4,5,6,7];
// let x = ab.splice(3,3);
// console.log(x);

//13. indexOf() :-
//           0 1 2 3 4 5 6 7 
// let ab = [1,2,3,4,5,6,7,1];
// let x = ab.indexOf(1);  // -1 
// console.log(x);

//14. lastIndexOf() :-
//        0 1 2 3 4 5 6 7 
// let ab = [1,2,3,4,5,6,7,1];
// let x = ab.lastIndexOf(10);  // -1 
// console.log(x);

//ES6
//15. foreach() : -
// let ab = [1,2,3,4,5,6];
// ab.forEach((arrayElement)=>console.log(arrayElement*2));

// //16.map() :- 
// let ab = [1,2,3,4,5,6];
// let new_Arr = ab.map((arrayElement)=> {
//     return arrayElement*2;});
// console.log(new_Arr);

//17. filter():- 
// let ab = [1,2,3,4,5,6];
// let even_arr = ab.filter((arrayElement)=>{
//     return arrayElement%2==0;
// });
// console.log(even_arr);

//18. find() : -
// let ab = [1,2,3,4,5,6];
// let present_no = ab.find((arrayElement)=>{
//     return arrayElement==2;
// });
// console.log(present_no);

//19 . every() : -
// let ab = [1,2,3,4,5,6];
// let check = ab.every((arrayElement)=>{
//     return arrayElement%2==0;
// });
// console.log(check);

//20. some() :-
// let ab = [1,2,3,4,5,6];
// let check = ab.some((arrayElement)=>{
//     return arrayElement>5;
// });
// console.log(check);

//21. sort() :-
// let ab = ["rohan","sumit","tejas","abhi"];
// ab.sort();
// console.log(ab);

// let ab = [6,8,2,1,4];
//  ab.sort(function(a,b){return b-a;});
// console.log(ab);












