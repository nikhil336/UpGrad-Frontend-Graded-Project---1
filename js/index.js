var postmodal = document.getElementById('create-post-modal');

var span = document.getElementsByClassName("close")[2];
 
function createPostModal() {
  postmodal.style.display = "block";
}

span.onclick = function() {
  postmodal.style.display = "none";
}


