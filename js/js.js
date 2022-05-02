const password = document.getElementById('password1');
const confirmPassword = document.getElementById('confirmPassword1');
const button = document.querySelector('#btn');
const message = document.getElementById('message');
button.addEventListener('click', syntaxCheck);


function syntaxCheck() {

    //check if passwords are correct
    if (password.value != confirmPassword.value) {
        message.innerText = "* Passwords do not match";
        message.style.fontSize="small";
        message.style.color="red";
        password.style.border="1px solid red";
        confirmPassword.style.border = "1px solid red";
        event.preventDefault();
        password.value="";
        confirmPassword.value="";
    }  
};