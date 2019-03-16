var comment = false;

function commentFunction() {
    
    var textarea = document.getElementById("commentarea");
    
    var div = document.createElement('div');
    
    var p = document.createElement('p');
    
    p.innerHTML = textarea.value;
    
    div.classList.add("comments");
    
    p.classList.add("commentspara");
    
    div.appendChild(p);
    
    var maindiv = document.getElementById("maincommentsection");
    
    if(flag == false) {
        maindiv.removeChild(document.getElementsByClassName("comments")[0]);
        
        flag = true;
        
    }
    
    maindiv.insertBefore(div,maindiv.childNodes[0]);
    
}

var likecounter = 0;

function likeFunction() {
    
    likecounter++;
    
    var p = document.getElementById("likepara");
    
    if(likecounter == 1) {
        p.innerHTML = "1 person like this!";
    }
    else {
        p.innerHTML= likecounter + " people have like this!";
    }
    
    var btn = document.getElementById("likebtn");
    
    btn.innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    
}

var flag = false;

function editFunction() {
    
    var btn = document.getElementById("editbtn");
    
    var div = document.getElementsByClassName("blogText")[0];
    
    if(flag == false) {
    
        btn.innerHTML = "Save <i class='fa fa-save'></i>";

        var p = document.getElementById("blogBody");

        var para = p.innerHTML;

        div.removeChild(p);

        var textarea = document.createElement('textarea');

        textarea.setAttribute("rows","14");

        textarea.setAttribute("style","width: 100%");

        textarea.value = para;
        
        textarea.id = "para-area";

        div.appendChild(textarea);
        
        flag = true;
        
    }
    
    else {
        
        btn.innerHTML = "Edit <i class='fa fa-edit'></i>";
        
        var area = document.getElementById("para-area");
        
        var p = document.createElement('p');
        
        p.innerHTML = area.value;
        
        div.removeChild(area);
        
        p.id = "blogBody";
        
        div.appendChild(p);
        
        flag = false;
        
    }
    
}