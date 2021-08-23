//1. alert("hello");
//2. prompt()

//  let userData =   prompt("Enter your name");
//  alert(userData);

//3. confirm();

// let check = confirm("Are you sure you want to delete data ?");
// if(check){
//     alert("your data deleted !");  
// }else{
//     alert("permission denied");
// }   

//4.window.open(url,target,features);
let newWindow;
document.getElementById("create-btn").onclick = function(){
  newWindow =  window.open("1_JavaScript Intro.pdf","_Blank","width=300,height=500");
//   newWindow.resizeTo(600,500);
}
//5 window.close()
document.getElementById("destroy-btn").onclick = function(){
    newWindow.close();
}

// document.getElementById("move-btn").onclick = function(){
//     newWindow.moveTo(500,200);
// }

// document.getElementById("scroll").onclick = function(){
//     window.scrollBy({top:100,behavior:'smooth'});
// }

// document.getElementById("scroll-up").onclick = function(){
//     window.scrollBy({top:-100,behavior:'smooth'});
// }


//history

// document.getElementById("back-btn").onclick = function(){
//    // history.back();
//    history.go(-1);
// }

// document.getElementById("forward-btn").onclick = function(){
//    // history.forward();
//    history.go(1);
// }   
// document.getElementById("reload-btn").onclick = function(){
//     history.go(0);
// }


//Location 
// window.location.assign("https://google.com");

// window.location.reload();

// window.location.replace("https://google.com");