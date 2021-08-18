// bom - window.method window.property 
//dom - document - window.doument.write("hello world");

// window.num=30;

// function show(){
//     // let a,b,c,d;  right
//     // a=b=c=d=10;/
//   //  let d=b=c=a=10; // do not use
//    // a=10,b=10,c=10,d=10; // not recommended
//     document.write(a,b,c,d);
// }

// show();
// alert(d);

//2. propmpt() :- 
// let data = window.prompt("Enter your name");
// alert(data);


//3. confirm() :- 
// let check = confirm("Are you sure you want to delete data ? ");
// if(check){
//     alert("permission granted");
// }else{
//     alert("permission denied");
// }

//4. window.open(url,target,features,replace);
// let newWindow;
// document.getElementById("new-btn").onclick = function(){
//  newWindow = window.open("../12-08-21_P/index.html","_Blank","width=200,height=200");
// }



// //5 . window.close() 
// document.getElementById("close-btn").onclick = function(){
//     newWindow.close();
//}


// document.getElementById("print-btn").onclick = function(){
//     window.print();
// }

// document.getElementById("back-btn").onclick = function(){
//     //history.back();
//     history.go(-1);
// };

// document.getElementById("forward-btn").onclick = function(){
//    // history.forward();
//    history.go(1);
// };

// document.getElementById("reload-btn").onclick = function(){
//     history.go(0); 
// };