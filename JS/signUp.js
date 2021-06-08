function validate() {
    let pass=document.getElementById("pass").value;
    let cpass=document.getElementById("pass2").value; 
    if(pass!= cpass) {
        alert("passwords do not match");
        return false;
    }
    let uid=document.getElementById("uname").value;
    let credentials={[uid]:pass};
    let previousCred=localStorage.getItem("cred"); 
    if (previousCred) {
        previousCred =JSON.parse(previousCred);
        credentials = {...previousCred,...credentials};
    } 
    localStorage.setItem("cred", JSON.stringify(credentials));
    return true;
}