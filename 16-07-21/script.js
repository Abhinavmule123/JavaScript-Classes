// Array  : 
let name = "rahul";

// using array literal 
// using array constructor
//                0       1       2   3   4  5
// let name1 = ["rahul","raj" ,"rohan",12,13,14]; 
// delete name1[0];
            
// let arr = [,,,,,,,];
// document.write(arr[0]);


// document.write(name1[0]);
// document.write(name1[5]);
// name1[0] = "soham";
// document.write(name1[0]);

// document.write(name1.length);

// document.write(name1);

// for(let i=0;i<name1.length;i++){
//     name1[i] = "don";
//     document.write(name1[i]+"<br>");
// }
// document.write(name1);  
// let i=0;
// while(i<name1.length){
//     document.write(name1[i]+"<br>");
//     i++;
// }

// let i=0;
// do{
//     document.write(name1[i]+"<br>");
//     i++;
// }while(i<name1.length);

// // using array constructor
// let array_name  = new Array("rahul",22,10,"soham");
// console.log(array_name[1]);

// 1 D
// let ab = [1,2,3,4,5];
// 3D
// let multiArray = [ [ [],[],[] ],[ [],[],[] ],[ [],[],[] ] ];
//2D              0       1       2
// //               0  1 2   0 1 2   0 1 2
// let twoDArray = [[1,2,3],[4,5,6],[7,8,9]];
// document.write(twoDArray);
// console.log(twoDArray);

// for(let i=0;i<twoDArray.length;i++){
//     for(let j=0;j<twoDArray.length;j++){
//         console.log(twoDArray[i][j]);
//     }
// }



// Array Methods 
//1. push : - 
// let ab = [1,2,3,4,5];
// let x = ab.push([6,7,8]);
// console.log(ab);


//2. pop :- 
// let ab = [1,2,3,4,5];
// let x =  ab.pop();
// console.log(x);

//3. unshift() :-
// let ab = [1,2,3,4,5];
// let x = ab.unshift([6,7,7]);
// console.log(x);

//4. shift() : -
// let ab = [1,2,3,4,5];
// let x = ab.shift();
// console.log(x);

// 5. concat() :- 
// let ab = [1,2,3];
// let ac = [4,5,6];
// let ad = [11,12,13];
// let new_arr = ab.concat(ac,7,8,9,ad);
// console.log(new_arr);

//6.join() :- 
// let ab = [1,2,3,4,5,6];
// console.log(ab);
// let separtor_arr = ab.join(" or ");
// console.log(separtor_arr);

// //7.reverse() :-
// let ab = [1,2,3,4,5,6];
// ab.reverse();
// console.log(ab);

//8. Array.isArray() : -s
// let ab = [1,2,3,4,5];
//  let x = Array.isArray(ab);
//  console.log(x);

//9.fill() :- 
//        0 1 2 3 4
// let ab = [1,2,3,4,5];
// // fill("static data",start,end) end- not include
// let new_Arr = ab.fill("hello",1,4);
// console.log(new_Arr);

//10. toString() : -
// let ab = [1,2,3,4,5];
// let x = ab.toString();
// console.log(ab);
// console.log(x);
