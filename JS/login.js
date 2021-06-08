function store(){
    let user= document.getElementById("uname").value; 
    let pa=document.getElementById("pass").value;
    if(localStorage.getItem("cred")){
        let creds=JSON.parse(localStorage.getItem("cred"));
        if(pa==creds[user]) {
            localStorage.setItem("user",user);
            window.open("pjsmain1.html");
            }else{
            alert("Please enter correct username or password");
            }
    }else{
        alert("Not Registered");
    }
    }