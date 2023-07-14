const inputBox=document.getElementById("input-box");
const Listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        Listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

Listcontainer.addEventListener("click",function(e){
    if(e.target.tagname==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data",Listcontainer.innerHTML);
}
function showTask(){
    Listcontainer.innerHTML=localStorage.getItem("data");

}
showTask();