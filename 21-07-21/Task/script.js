let a = window.prompt("enter any number");
let b = isNaN(a);
// console.log(b);
if (b==false) {
    document.write("it is a number");
} else {
    document.write("it is not a number");
}

let c = window.prompt("enter a number");
 let z = Number.isFinite(c);
 if (z==false) {
     document.write("</br>"+"number is finite");
 } else {
    document.write("number is not finite");
     
 }                                                                  
 
 let x = window.prompt("enter a number");
 let convertIntoNum = Number(x);
//  document.write(typeof convertIntoNum);
 let n2 = convertIntoNum.toString(2);
 let n3 = convertIntoNum.toString(8);
 let n4 = convertIntoNum.toString(16);
 document.write("</br>" + n2 +" "+ n3+" " + " "+n4);
 
 
                                                            
                                                            
                                                            
                                                            
                                                            
                                                             
                                                             
                                                              
                                                                 
                                                                
                                                          
                                                                    
                                                               
                                                              