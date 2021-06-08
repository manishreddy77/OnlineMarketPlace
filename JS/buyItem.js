let wname=localStorage.getItem("user");
window.onload=function(){
    if(wname){
        document.getElementById("cname").innerHTML=wname;
        let d=new Date(); 
        console.log(d);
        document.getElementById("datee").innerHTML=d;
        let bag=localStorage.getItem("bag"); 
        console.log(bag);
        let container=document.getElementById("list");
        let totalItems = 0;
        let cost=0; 
        if(bag){
            bag= JSON.parse(bag);
            totalItems= bag.length
            bag.forEach(function(item, index){
                let listitem=document.createElement("li");
                listitem.style.padding = 0;
                let spanItem=document.createElement("span");
                spanItem.innerText="Item \""+item.itemName+"\" costing Rs." +item.cost+" will be delivered in "+item.delivery+ "!!";
                listitem.appendChild(spanItem);
                container.appendChild(listitem); 
                cost+=item.cost;
                });
            } 
        document.getElementById("total").innerHTML='You have bought '+totalItems+ ' items'; 
        document.getElementById("totalcost").innerHTML='Your total bill is Rs. '+cost; 
    } else{
        window.location.pathname = '/pjslogin1.html';
    }
}
function logout() {
    window.location.pathname='/pjslogin1.html';
    localStorage.removeItem("user");
    localStorage.removeItem("bag");
} 