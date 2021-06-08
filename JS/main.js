let wname = localStorage.getItem("user");
window.onload = function () {
    if(wname){
        document.getElementById("cname").innerHTML= wname;
        let d = new Date();
        console.log(d);
        document.getElementById("datee").innerHTML= d;
    } else{
        window.location.pathname= '/pjslogin1.html';
    }
}
var bag = [];
function imgclick(type) {
var obj = {};
alert("Item Added");
if (type == "cloth") {
    obj.itemName = "Clothing";
    obj.image ="./images/clothing.jpg";
    obj.cost = 2000;
    obj.delivery = "3-5 days";
    bag.push(obj);
    localStorage.setItem("bag",JSON.stringify(bag));
}
else if (type == "beauty") {
    obj.itemName ="Beauty & health"; 
    obj.image - "./images/health.jpg";
    obj.cost = 2500;
    obj.delivery = "1-2 days"; 
    bag.push(obj);
    localStorage.setItem("bag",JSON.stringify(bag));
}
else if (type == "foot") {
    obj.itemName = "Footwear";
    obj.image = "./images/footwear.jpg";
    obj.cost = 3000;
    obj.delivery = "3-4 days";
    bag.push(obj);
    localStorage.setItem("bag",JSON.stringify(bag));
}
else if (type=="bag") {
    obj.itemName = "School Bags";
    obj.image = "./images/school.jpg";
    obj.cost = 4000;
    obj.delivery = "4-5 days"; 
    bag.push(obj);
    localStorage.setItem("bag",JSON.stringify(bag));
}
}
function logout() {
window.location.pathname='/pjslogin1.html';
localStorage.removeItem("user");
localStorage.removeItem("bag");
}
function gotocart() {
window.location.pathname='/pjsbuyitem.html';
}