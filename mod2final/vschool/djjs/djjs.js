var box=document.getElementById("box")
box.addEventListener("mouseover", hover)
function hover(){
  document.getElementById("box").style.backgroundColor="blue"
}
box.addEventListener("mouseout", unHover)
function unHover(){
  document.getElementById("box").style="none"
}
box.addEventListener("mousedown", clicker)
function clicker(){
  document.getElementById("box").style.backgroundColor="red"
}
box.addEventListener("mouseup", unclick)
function unclick(){
  document.getElementById("box").style.backgroundColor="yellow"
}
box.addEventListener("dblclick", dblclicked)
function dblclicked(){
  document.getElementById("box").style.backgroundColor="green"
}
box.addEventListener("hover", dblclicked)
function dblclicked(){
  document.getElementById("box").style.backgroundColor="green"
}

// var hi=document.getElementById("hello")
// hi.addEventListener("mousemove", hovers)
// function hovers(){
//   document.getElementById("hello").style.backgroundColor="orange"
// }


