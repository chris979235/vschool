let button=document.getElementById("clickme")
let par=document.getElementById("paragraph")


let count



if (localStorage.getItem("count")){
  count=localStorage.getItem("count")
}  
else {count=0}

par.textContent=count
function event(){
  count++
  par.textContent=count
  localStorage.setItem("count", count)
}

button.addEventListener("click", event)

