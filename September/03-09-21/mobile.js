class Nokia{
    power(){
        console.log("this is power button");
    }
}
 class Samsung{
    Samswitch(){
        console.log("this is samsung function");
    }
}
export  {Samsung};
 function show(){
   console.log("this is show function");
}

// export default show;

  const pi = 3.14;

export {Nokia,show,pi};

// export
// 1. export default - 1 
// 2. named export  - multiple export 