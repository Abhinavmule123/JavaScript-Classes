// 1st using tag 
// let h1Tag = document.getElementsByTagName("h1");
// console.log(h1Tag);

//2nd using class
// let h1Tags = document.getElementsByClassName("hello");
// console.log(h1Tags);

//3rd using id
// let heading = document.getElementById("heading");
// console.log(heading);

//4TH querySelector() : -
// let felement = document.querySelector("#heading");
// console.log(felement);


//5th querySelectorAll() : -
// let sel = document.querySelectorAll(".hello");
// for(let i=0;i<sel.length;i++){
//     console.log(sel[i]);
// }

//DOM TREE : -
//Node 
// Node Propertices
//1. nodeName
let ul = document.getElementById("list");
//console.log(ul.nodeName);
//2. nodeType
console.log(ul.nodeType);
//imp propertices
//3. textContent 
// let secondLi = document.getElementById("second-li");
// console.log(secondLi.textContent);

// let h1Tag = document.querySelector("h1");
// h1Tag.textContent = "This is dynamic h1 Tag";

//4. parentNode // 5 parentElement
// let secondLi = document.getElementById("second-li");

// console.log(secondLi.parentNode);
// console.log(secondLi.parentElement);

//6. firstChild  and 7. firstElementChild
// let ul1 = document.getElementById("list");
// console.log(ul1.firstChild);  
// console.log(ul1.firstElementChild); 

//8. lastChild and 9.lastElementChild
// let ul1 = document.getElementById("list");
// console.log(ul1.lastChild);
// console.log(ul1.lastElementChild);

//10. previoussibiling and 11.previousElementSibling
// let secondLi = document.querySelector("#second-li");
// console.log(secondLi.previousSibling);
// console.log(secondLi.previousElementSibling);

//11.nextSibling and nextElementSibing
let secondLi = document.querySelector("#second-li");
console.log(secondLi.nextSibling);
console.log(secondLi.nextElementSibling);

