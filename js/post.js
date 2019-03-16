function commentFunction() {
    
    var textarea = document.getElementById("commentarea");
    
    var div = document.createElement('div');
    
    var p = document.createElement('p');
    
    p.innerHTML = textarea.value;
    
    div.classList.add("comments");
    
    p.classList.add("commentspara");
    
    div.appendChild(p);
    
    var maindiv = document.getElementById("maincommentsection");
    
    if(textarea.value != "") {
    
        maindiv.insertBefore(div,maindiv.childNodes[0]);
        textarea.value = "";
    
    }
    
}

var likecounter = 0;

function likeFunction() {
    
    likecounter++;
    
    var p = document.getElementById("likepara");
    
    if(likecounter == 1) {
        p.innerHTML = "1 person likes this!";
    }
    else {
        p.innerHTML= likecounter + " people have liked this!";
    }
    
    var btn = document.getElementById("likebtn");
    
    btn.innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    
}

var flag = false;

function editFunction() {
    
    var btn = document.getElementById("editbtn");
    
    var div = document.getElementsByClassName("blogText")[0];
    
    var divtitle = document.getElementById('blogTitle');
    
    var h4 = document.getElementById('blogTitleNew');
    
    if(flag == false) {
    
        btn.innerHTML = "Save <i class='fa fa-save'></i>";

        var p = document.getElementById("blogBody");

        var para = p.innerHTML;

        div.removeChild(p);

        var textarea = document.createElement('textarea');

        textarea.setAttribute("rows","12");

        textarea.setAttribute("style","width: 100%");

        textarea.value = para;
        
        textarea.id = "para-area";
        
        var heading = h4.innerHTML;
        
        divtitle.removeChild(h4);
        
        var headarea = document.createElement('textarea');
        
        headarea.id = 'heading';
  
        headarea.setAttribute("rows","1");
        
        headarea.value = heading;
        
        divtitle.appendChild(headarea);

        div.appendChild(textarea);
        
        flag = true;
        
    }
    
    else {
        
        btn.innerHTML = "Edit <i class='fa fa-edit'></i>";
        
        var area = document.getElementById("para-area");
        
        var harea = document.getElementById("heading");
        
        var p = document.createElement('p');
        
        var h4 = document.createElement('h4');
        
        p.innerHTML = area.value;
        
        divtitle.removeChild(harea);
        
        div.removeChild(area);
        
        p.id = "blogBody";
        
        h4.id = "blogTitleNew";
        
        h4.innerHTML = harea.value;
        
        divtitle.appendChild(h4);
        
        div.appendChild(p);
        
        flag = false;
    }
    
}