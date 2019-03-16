var signinmodal = document.getElementById('signin-modal');

var signupmodal = document.getElementById('signup-modal');

var span0 = document.getElementsByClassName("close")[0];

var span1 = document.getElementsByClassName("close")[1];

span0.onclick = function() {
    signinmodal.style.display = "none";
}

span1.onclick = function() {
    signupmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";  
  }
  if (event.target == signupmodal) {
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