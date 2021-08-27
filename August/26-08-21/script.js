// client machine - > data  -> web storage 
//1. localstorage
//2. sessionStroage
//3. cookies 

//                 cookies     localStorage  sessionStorage 
// capcity -       4kb         10mb            5mb
// accessible -    any window ,any window ,  same window
// support -       html 4/5    html 5      , html 5
// expiry -       manually set, never      ,   on tab  close
// Storage -      browser/server , browser, browser/server

// Methods :- 
// 1.setItem(key,value) 
//2. getItem(key)
//3. removeItem(key)
//4. clear()
//Property 
// length 
if(typeof(Storage) !== "undefined"){
//   sessionStorage.setItem("name","abhinav");
//   sessionStorage.setItem("course","JS");
  //sessionStorage.removeItem("1");
   // alert(sessionStorage.getItem("name"));
//    sessionStorage.clear();
    // if(sessionStorage.length == 0){
    //     sessionStorage.setItem("data","some data");
    // }else{
    //     sessionStorage.clear();
    // }
}
else{
    alert("not supported !");
}
