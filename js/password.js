// alert two different error message if passwords don't match or are not at least 8 characters for password.html
function validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("verify").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return false;
    }
    return true;
}