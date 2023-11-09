let form = document.getElementById("my-form");
let fnameError = document.querySelector(".fnameError");
let emailError = document.querySelector(".emailError");
let pnumError = document.querySelector(".pnumError")
let crpwdError = document.querySelector(".crpwdError");
let cpwdError = document.querySelector(".cpwdError");
//sumbit form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateFname();
    validatEemail();
    validatePnum();
    validatecrPwd();
    validatecPwd();
});

//valid full name
function validateFname() {
    let Fullname = document.getElementById("Fullname").value;
    if (Fullname.length == 0){
        fnameError.classList.remove("success");
        fnameError.innerHTML = "FullName is required";
    }
    if((Fullname.length>0) & (Fullname.length<3)){
        fnameError.classList.remove("success");
        fnameError.innerHTML = "Name is too short";
    }
    if(Fullname.length>=3) {
        fnameError.classList.add("success");
        fnameError.innerHTML="Success";
    }
}
function validatEemail(){
    let emailVal = document.getElementById("email").value;
    if(emailVal===''){
        emailError.classList.remove("success");
        emailError.innerHTML ="Enter your mail.."
    }
    if(!ValidateEmail(emailVal)) {
        emailError.classList.remove("success");
        emailError.innerHTML("please enter your valid email");
    } 
    if(emailVal){
        emailError.classList.add("success");
        emailError.innerHTML ="Success"
     }
}
function validatePnum(){
    let pnumVal = document.getElementById("phonenumber").value;
    if(pnumVal.length == 0){
        pnumError.classList.remove("success");
        pnumError.innerHTML ="phonenumber is required";
    }
    if(pnumVal.length <= 10){
        pnumError.classList.remove("success");
        pnumError.innerHTML ="Please check your number.."
    }
    if(pnumVal.length>=10){
        pnumError.classList.add("success");
        pnumError.innerHTML="success";
    }
}

function validatecrPwd(){
    let crpassWord = document.getElementById("Createpassword").value;
    if(crpassWord.length == 0){
        crpwdError.classList.remove("success");
        crpwdError.innerHTML ="password is required";
    }
    if(crpwdError.length < 8){
        crpwdError.classList.remove("success");
        crpwdError.innerHTML ="Please check your valid password.."
    }
    if(crpwdError.length>=8){
        crpwdError.classList.add("success");
        crpwdError.innerHTML="success";
    }
}
function validatecPwd(){
    let cpassWord = document.getElementById("cpassword").value;
    if(cpassWord.length == 0){
        cpwdError.classList.remove("success");
        cpwdError.innerHTML ="password is required";
    }
    if(cpwdError.length < 8){
        cpwdError.classList.remove("success");
        cpwdError.innerHTML ="Please check your valid password.."
    }
    if(cpwdError.length>=8){
        cpwdError.classList.add("success");
        cpwdError.innerHTML="success";
    }
}

//Email validation
const ValidateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    };