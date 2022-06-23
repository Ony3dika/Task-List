let task=document.querySelector(".task")

let add=document.querySelector(".add")

let hold=document.querySelector(".holder")

let empty=document.querySelector(".clr")


document.addEventListener("DOMContentLoaded", refresh)

    //Adding Tasks

add.addEventListener("click", function(e){

    e.preventDefault()
   
    let work=document.createElement("li")

    let para=document.createElement("p")

    let icon=document.createElement("i")

    icon.classList="fa-solid fa-xmark"

    para.className="text"

    para.textContent=task.value

    work.className="work"

    work.appendChild(para)

    work.appendChild(icon)

    hold.appendChild(work)

    alert("New Task Added!!")

    icon.addEventListener("click", end)

    

    //Removing Tasks

    function end(e){
    if (icon.classList.contains("fa-solid")){

        e.target.parentElement.remove()
        
        if(confirm("Are you sure?")){
            removels(e.target.parentElement)
        }
        
    }}

})

//Adding Tasks To Local Storage

add.addEventListener("click", save)

function save(e){
    let newData=document.querySelector(".task").value
    
    let array;

    if (localStorage.getItem("array")==null){
        array=[];
    }

    else{
        array=JSON.parse(localStorage.getItem("array"))
    }
    array.push(newData)
    localStorage.setItem("array",JSON.stringify(array))
}

//Preventing Refresh

function refresh(){

    if (localStorage.getItem("array")== null){
        array=[]
    }else{
        array=JSON.parse(localStorage.getItem("array"))
    }

    array.forEach(function(data){

    let work=document.createElement("li")

    let para=document.createElement("p")

    let icon=document.createElement("i")

    icon.classList="fa-solid fa-xmark"

    para.className="text"

    para.textContent=data

    work.className="work"

    work.appendChild(para)

    work.appendChild(icon)

    hold.appendChild(work)
    })
}

//Removing from LS

function removels(para){

    let array;

    if (localStorage.getItem("array")===null){
        array=[]
    }else{
        array=JSON.parse(localStorage.getItem("array"))
    }
    
    array.forEach(function(dell, index){

        if(para.textContent==dell){
            
        array.splice(index, 1);
        }
    })

    localStorage.setItem("array",JSON.stringify(array));
}

//CLEAR

empty.addEventListener("click", enzo)

function enzo(){
    localStorage.clear()

    document.location.reload()
}

