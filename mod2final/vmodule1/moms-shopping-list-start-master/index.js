const form=document["addItem"]
const list=document.getElementById("list")

form.addEventListener("submit", function(event){
  event.preventDefault()

  const shopList=form.title.value
 shopList.value=""

 const l1 = document.createElement("li")
 const button=document.createElement("button")
button.addEventListener("click", function(){
  list.removeChild(l1)
})
 button.textContent="x"
l1.textContent=shopList
l1.appendChild(button)
document.getElementById("list").prepend(l1)
})






