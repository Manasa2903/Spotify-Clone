function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var email = document.loginForm.email.value;
    var password = document.loginForm.password.value;
    var emailErr = passwordErr = true;

    if (email == "") {
        printError("emailErr", "Please enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    if (password == "") {
        printError("passwordErr", "Please enter your passsword");
    } else {
        var regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        if (regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if ((emailErr || passwordErr) == true) {
        return false;
    }

};