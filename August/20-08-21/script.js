// setTimeout()
// let setid;
// document.getElementById("start").onclick  = function(){
//    setid =  setTimeout(() => {
//             window.alert("hello world");
//     }, 3000);
// }

// document.getElementById("stop").onclick = function(){
//     clearTimeout(setid);
// }

// let box = document.getElementById("box");
// pos=30;
// let intervalId;
// document.getElementById("start").onclick = function(){
//     intervalId =  setInterval(function(){
//         box.style.marginLeft = pos+"px";
//         pos+=30;  
//     },1000);
// }

// document.getElementById("stop").onclick = function(){
//     clearInterval(intervalId);
// }


// let clock = document.getElementById("clock");
// setInterval(function(){
//     let date  =  new Date();
//     let currentTime =  date.toLocaleTimeString();
//     clock.innerHTML = currentTime;
// },1000);


// let countDown = document.getElementById("countdown");
// let count=5;
// let csetId = setInterval(function(){
//     count--;
//     countDown.innerHTML = count;
//     if(count == 0){
//         clearInterval(csetId);
//         let a = document.createElement("A");
//         a.href = "1_JavaScript Intro.pdf";
//         a.download = "js";
//         a.click();
//     }
// },1000);


// Form Accesssing ways
// 1 . document.getElementById("myform");
//2.document.forms[0]
//3. document.forms["mazaform"]
//4. document.forms["myform"];
//5. document.mazaform

//accessing form fields
//1. document.getElementById("name");
//2. document.forms[0]["name"]
//3. document.forms[0]["myname"]
//4. document.forms[0].elements["name" || 0 || "myname"]

// console.log(document.forms[0].elements["name"]);

// window.onload = function(){
//     window.alert("hello");
// }