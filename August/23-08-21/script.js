let signupform = document.getElementById("signup-form");
let validated = 0;

let firstname = document.getElementById("firstname");
let firstnameNotice = document.getElementById("firstname-notice");
firstname.onblur = function(){
    if(firstname.value == ""){
        firstnameNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !';
        firstnameNotice.className = "animate__animated animate__flash animate__infinite";
        document.getElementById("firstname-tick").style.display = "none";
        
    }else{
        document.getElementById("firstname-tick").style.display = "inline";
        validated++;
    }
}
firstname.onclick = function(){
    if(firstnameNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !'){
        firstnameNotice.innerHTML = '';
        firstnameNotice.className = "";
    }
}   

let mobile = document.getElementById("mobile");
let mobileNotice = document.getElementById("mobile-notice");
mobile.onblur = function(){
    if(mobile.value == ""){
            mobileNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !';
            mobileNotice.className = "animate__animated animate__flash animate__infinite";
            document.getElementById("mobile-tick").style.display = "none";
        }else{
            if(mobile.value.length == 10){
                document.getElementById("mobile-tick").style.display = "inline";
                validated++;
            }else{
                mobileNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> Mobile number must be 10 digit !';
            mobileNotice.className = "animate__animated animate__flash animate__infinite";
            document.getElementById("mobile-tick").style.display = "none";
            }
        }
}

mobile.onclick = function(){
    if(mobileNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !' || mobileNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;"></i> Mobile number must be 10 digit !'){
        mobileNotice.innerHTML = '';
        mobileNotice.className = "";
    }
}


let email = document.getElementById("email");
let emailNotice = document.getElementById("email-notice");

email.onblur = function(){
    if(email.value == ""){
        emailNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !';
        emailNotice.className = "animate__animated animate__flash animate__infinite";
        document.getElementById("email-tick").style.display = "none";
    }else{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let check = re.test(String(email.value).toLowerCase());
        if(check){
            document.getElementById("email-tick").style.display = "inline";
            validated++;
        }else{
            emailNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> Invalid E-mail  !';
            emailNotice.className = "animate__animated animate__flash animate__infinite";
            document.getElementById("email-tick").style.display = "none";
        }
    }
}

email.onclick = function(){
    if(emailNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;"></i> This field is required !' || emailNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;"></i> Invalid E-mail  !'){
        emailNotice.innerHTML = "";
        emailNotice.className = "";
    }
}

let password = document.getElementById("password");
let passMsg = document.getElementById("password-message");
password.oninput = function(){
    let validate = 0;
    let pass = this.value;
    passMsg.style.display = "block";
    let small = /[a-z]/g;
    let capital = /[A-Z]/g;
    let num = /[0-9]/g;
    let sp = /[!@#$%^&*()_{}":?><~/,.]/g;
    if(small.test(pass)){
        passMsg.children[1].className="animate_animated animate__bounceOut";
        passMsg.children[1].style.display = "none";
        validate++;
    }else{
        passMsg.children[1].style.display = "block";
        validate--;
    }

    if(capital.test(pass)){
        passMsg.children[0].className="animate_animated animate__bounceOut";
        passMsg.children[0].style.display = "none";
        validate++;
    }else{
        passMsg.children[0].style.display = "block";
        validate--;
    }

    if(num.test(pass)){
        passMsg.children[3].className="animate_animated animate__bounceOut";
        passMsg.children[3].style.display = "none";
        validate++;
    }else{
        passMsg.children[3].style.display = "block";
        validate--;
    }

    if(sp.test(pass)){
        passMsg.children[2].className="animate_animated animate__bounceOut";
        passMsg.children[2].style.display = "none";
        validate++;
    }else{
        passMsg.children[2].style.display = "block";
        validate--;
    }

    if(pass.length > 8){
        passMsg.children[4].className="animate_animated animate__bounceOut";
        passMsg.children[4].style.display = "none";
        validate++;
    }else{
        passMsg.children[4].style.display = "block";
        validate--;
    }

    if(validate == 5){
        passMsg.style.display = "none";
        validated++;
    }
}

let passwordNotice = document.getElementById("password-notice");
password.onblur = function(){
    if(password.value == ""){
        passwordNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> This field is required !';
        passwordNotice.className = "animate__animated animate__flash animate__infinite";
        document.getElementById("password-tick").style.display = "none";
    }else{
        document.getElementById("password-tick").style.display = "inline";
    }
}


password.onclick = function(){
    if(passwordNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> This field is required !'){
        passwordNotice.innerHTML = '';
        passwordNotice.className = "";
        document.getElementById("password-tick").style.display = "none";
    }
}

let r_password = document.getElementById("c_password");
let rpassworNotice = document.getElementById("rpassword-notice");
r_password.onblur = function(){
    if(r_password.value == ""){
        rpassworNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> This field is required !';
        rpassworNotice.className = "animate__animated animate__flash animate__infinite";
        document.getElementById("rpassword-tick").style.display = "none";
    }else{
        let password = document.getElementById("password").value;
        if(r_password.value == password){
            document.getElementById("rpassword-tick").style.display = "inline";
            validated++;
        }else{
            rpassworNotice.innerHTML = '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> Password and confirm password do not match !';
        rpassworNotice.className = "animate__animated animate__flash animate__infinite";
        document.getElementById("rpassword-tick").style.display = "none";
        }
    }
}

r_password.onclick = function(){
    if(rpassworNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> This field is required !' || rpassworNotice.innerHTML == '<i class="fa fa-exclamation" style="font-size: 15px;color:red"></i> Password and confirm password do not match !'){
        rpassworNotice.innerHTML = '';
        rpassworNotice.className = "";
        document.getElementById("rpassword-tick").style.display = "none";
    }
}



let submitBtn = document.getElementById("submit-btn");
let noOfValidations =5;
signupform.onsubmit = function(e){
    e.preventDefault();
    if(validated == noOfValidations){
        window.alert("form submitted");
        console.log(validated);
    }else{
        alert("form not submited");
        console.log(validated);
    }
}




// signupform.onsubmit = function(){
//     alert("hello");
// }

// firstname.onblur = function(){
//     console.log("hello");
// }

// document.getElementById("pass").oninput = function(){
//     let userPass = document.getElementById("pass").value;
//     let capital = /[A-Z]/g;
//     let lowerCase = /[a-z]/g;
//     let number = /[0-9]/g;
//     let spal_char= /[!@#$%^&*()_{}:";'?><,.]/g;
//     if(capital.test(userPass) &&  lowerCase.test(userPass) && number.test(userPass) &&  userPass.length >= 8  && spal_char.test(userPass)){
//         console.log("Your Password is Strong");
//     }
    
// }
 

// let p = /[0-9]/g;

// alert(p.test("1"));


// syntax  
// /[pattern]/modifier

// modifier - i - incensitive / g-sensitive ;
// userinput = "ASAS";
// let pattern = /[A-Z]/g   // number validation 
// let check = pattern.test(userinput);
// alert(check);