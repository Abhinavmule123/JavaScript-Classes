//2nd way
// let btn = document.getElementById("btn");
// btn.onclick = function(){
//     window.alert(this);
// };


//3rd way 
// let btn = document.getElementById("btn");
// function show(){
//         window.alert("hello")
// }
// btn.addEventListener("click",show);


 let btn = document.getElementById("btn");
// btn.onclick = function(){
//     window.alert("hello");
// };

// btn.onclick = function(){
//     window.alert("hii world");
// };

//3rd way
btn.addEventListener("click",function(){
    this.textContent = "new button";
    window.alert(this.textContent);
});

// btn.addEventListener("click",function(){
//     window.alert("hii world");
// });
