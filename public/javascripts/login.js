var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "user123"){
alert ("Login successfully");
window.location = "/home"; // Redirecting to other page.
return false;
}
else{
alert ("Login failed")
window.location = "/login"; // Redirecting to login
}
}