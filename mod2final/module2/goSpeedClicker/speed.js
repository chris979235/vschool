



let bodyClick = document.getElementById("clickme")
let par=document.getElementById("paragraph")
let count = 0;

if (localStorage.getItem("numberOfClicks")){
  count=localStorage.getItem("numberOfClicks")
}  
else {count=0}

function event(){
  count ++
  par.textContent = count
  localStorage.setItem("numberOfClicks", count)
}
localStorage.setItem("numberOfClicks", count)

bodyClick.addEventListener("click", event)
