//control statement
// 1. if 

// if(true){
//     window.alert("2 is greater");   
// }

// 2.  if-else

// if(2<1){
//     window.alert("2 is greater");
// }
// else{
//     window.alert("2 is less no.");
// }
// if(2<1)
//     window.alert("2 is greater");
// else
//     window.alert("2 is less");

// if(5>3){
//     if(5<4){
//         window.alert("5 is greater");
//     }else{
//         if(5<3){
//             window.alert("5 is greater");
//         }else{
//             window.alert("3 is less");
//         }
//     }
// }else{
//     window.alert("5 is less");
// }
    // if((2<1) || (3>2)){
    //     window.alert("execute");
    // }
// var day = "sat";

// if(day=="sun"){
//     window.alert("sunday");
// }else if(day=="mon"){
//     window.alert("Monday");
// }else if(day=="fri"){
//     window.alert("Friday");
// }else{
//     window.alert("Saturday");
// }


// 2. switch()
// var choice = "jun";   
// switch(choice){
//     case "jan" :    window.alert("January");
//                         break;
//     case "feb" :  window.alert("Feburary");
//                         break;
//     case "jun"  :    window.alert("June")
//                         break;
//     default :       window.alert("no match");
// }



// Loops
// 1. for 2.  while  3. do-while
//1. for
// for(initialization of vaiable , codition , increment or decrement){
        
// }
// var i;
// for(i=0;i<10;i++)                   1.  i=0 ;   0<10=> execute => 0+1 = i=1;
                                    // 2. i=1 ; 1<10 =>  execute = >i=1      
                                    
                                //  11 . i=10  ; 10<10 => stop execution 
//   document.write("abhinav"+"<br>");

// var i=0;
// for( ;i<5;i++){
//     document.write("abhinav");
// }

// var i=0;
// for( ; ;i++){

//     if(i==5){
//         break;
//     }
//     document.write("abhinav");
// }

// var i=0;
// for( ; ; ){
//     if(i==5)
//         break;
//     document.write("abhinav"+"<br>");
//     i++;
// }

// for(var i=1;i<=10;i++){
//     if(i==5)
//         continue;
//     document.write(i+"<br>");
// }
  
    // for( var i=0;i<3;i++){     i=0 =>0<3 = >execute =>  0 =>        
    //     document.write(i);           j=0=> 0<5 =>  0 => j++ => 1 => 1<5 => 2 => 2++ => j=3 => 3<5 = > 3 = >     4  
    //     for(var j=0;j<5;j++){        i=1 = >
    //         document.write(j);       i=2 = > same process
    //     }
    // }

//2 . while
// Syntax : - 
    // intilization variable
    // while(condition){
    //     increment or decrement;
    // }

    // var i=10;
    // while(i>=1){
    //     document.write(i+"<br>");
    //     i--;
    // }

    // do-while 
    // var i=1;
    // do{
    //     document.write(i);
    //     i++;
    // }while(i>3);

    // Escapes Sequences

    // \t \n  \" \' \\ 

    // console.log("this is \t\tgood");