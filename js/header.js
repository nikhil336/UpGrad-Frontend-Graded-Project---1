var signinmodal = document.getElementById('signin-modal');

var signupmodal = document.getElementById('signup-modal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];

var span1 = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    signinmodal.style.display = "none";
    //signupmodal.style.display = "none";
}

span1.onclick = function() {
    //signinmodal.style.display = "none";
    signupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
    //signupmodal.style.display = "none";  
  }
  if (event.target == signupmodal) {
    //signinmodal.style.display = "none";
    signupmodal.style.display = "none";  
  }    
}

function SigninModal() {
    signinmodal.style.display = "block";
}

function SignupModal() {
    signinmodal.style.display = "none";
    signupmodal.style.display = "block";
}