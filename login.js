function validate(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if(username.trim()==""){
        alert("Username must be fild");
        return false;
    }else if(password.trim()==""){
        alert("Password must be filled");
        return false;
    }else if(password>6){
        alert("password must be more than 6 letter")
        return false;
    }else{
        alert("logged in Successfully");
        return true;
    }
    }
    