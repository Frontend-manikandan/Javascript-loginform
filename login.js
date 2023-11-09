//Give the inputs

let form = document.getElementById("my-form");
let nameError = document.querySelector(".nameError");
let pwdError = document.querySelector(".pwdError");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateName();
    validatePwd();
});

function validateName() {
    let userName = document.getElementById("username").value;
    if (userName.length == ''){
        nameError.classList.remove("success");
        nameError.innerHTML = "Name is required";
    }
    if((userName.length>0) & (userName.length<3)){
        nameError.classList.remove("success");
        nameError.innerHTML = "Name is too short";
    }
    if(userName.length>=3) {
        nameError.classList.add("success");
        nameError.innerHTML="Success";
    }
}
function validatePwd(){
    let passWord = document.getElementById("password").value;
    if(passWord.length == 0){
        pwdError.classList.remove("success");
        pwdError.innerHTML ="password is required";
    }
    if(passWord.length < 8){
        pwdError.classList.remove("success");
        pwdError.innerHTML ="Please check your valid password.."
    }
    if(passWord.length>=8){
        pwdError.classList.add("success");
        pwdError.innerHTML="success";
    }
}