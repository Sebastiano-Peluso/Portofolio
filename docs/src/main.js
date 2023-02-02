//Validation Code for login

var user = document.forms['form']['user'];
var password = document.forms['form']['password'];

var user_error = document.getElementById('user_error');
var pass_error = document.getElementById('pass_error');

user.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);



function validated(e) {
    e.preventDefault();
    if (user.value.length < 9) {
        user.style.border = "1px solid red";
        user_error.style.display = "block";
        user.focus();
        return false;
        
    }

    if (password.value.length < 4) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
        
    }
    
}

function user_Verify() {
    if (user.value == "sebastiano.peluso") {
        user.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
        
    }
    
}

function pass_Verify() {
    if (password.value == "4578") {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
        
    }
    
}