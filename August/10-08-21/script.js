//  let btn = document.getElementById("btn");

 //2nd
// btn.onclick = display;

// btn.onclick = function(){
//     this.innerHTML = "";
//     let div = document.createElement("DIV");
//     div.width = "50px";
//     div.height = "50px";
//     div.style.borderRadius = "50%";
//     div.style.backgroundColor = "red";
//     div.style.color = "white";
//     div.innerHTML = "Click";
//     this.append(div);
//     window.alert("changed");
// };


//3rd way
//  btn.addEventListener("click",display);

//  btn.addEventListener("click",function(){
//    console.log(this);
//  });



//  function display(){
//     window.prompt("enter your name");
//  }


let box = document.getElementById("first");
let moveBtn = document.getElementById("move");
let stopBtn = document.getElementById("stop");

let move=0;
moveBtn.addEventListener("click",moveFun,true);

stopBtn.addEventListener("click",function(){
    moveBtn.removeEventListener("click",moveFun,true);
});

function moveFun(){
        move += 50;
        box.style.left = move+"px";
}


// let form = document.getElementById("form");

// form.onsubmit = function(e){
//    e.preventDefault();
// }




