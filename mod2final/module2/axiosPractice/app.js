function deleteMe(element){
  axios.delete("https://api.vschool.io/chrisrees/todo/"+element.id+"/")
  .then(response =>{
    getShitDone()
    alert("you have deleted it")
  })
  .catch(error => {console.log("error")})
  console.log("buttonclass")
}


function checked(element, elemName){
  axios.put("https://api.vschool.io/chrisrees/todo/"+element.id+"/")
  .then(response =>{
    elemName.style="text-decoration: line-through"
    getShitDone()
    alert("you have puta a line through it")
  })
  .catch(error => {console.log("error")})
  console.log("buttonclass")
}


function formSubmit(submit){
  axios.post("https://api.vschool.io/chrisrees/todo/", {
    title: submit.input1.value,
    description: submit.input2.value,
    imgUrl: submit.input3.value,
    price: submit.input4.value
  })
  .then(response => {
    getShitDone()
    alert("you have succusfully created a new item")
    submit.clear()
  }).catch(error => {console.log("you have an error")
  
console.log(error.response)
})
}







function getShitDone(){
  document.getElementById("todolist").innerHTML=""
  axios.get("https://api.vschool.io/chrisrees/todo/")
  .then(response => {
    for (let i=0; i<response.data.length; i++){
      const todolist=document.getElementById("todolist")
      const h1=document.createElement("h1")
      let dataLore =response.data[i]
      h1.textContent=dataLore.title
      if(dataLore.completed){
        h1.style="text-decoration: line-through"
      }
      todolist.appendChild(h1)
      const img=document.createElement("img")
      img.src=dataLore.imgUrl
      todolist.appendChild(img)
      const p=document.createElement("P")
      p.textContent=dataLore.description
      todolist.appendChild(p)
      const button=document.createElement("button")
      button.textContent="delete"
      button.id=dataLore._id
      todolist.appendChild(button)
      const price=document.createElement("P")
      price.textContent=dataLore.price
      todolist.appendChild(price)
      const check=document.createElement("button")
      check.textContent="mark"
      check.id=dataLore._id
      todolist.appendChild(check)
      button.addEventListener("click", function(){
        deleteMe(this)
      })
      check.addEventListener("click", function(){
        checked(this, h1)
      })
    }
  })
  .catch(error => console.log(error))
}
    document.todoform.addEventListener("submit", function(event){
      event.preventDefault()
      formSubmit(document.todoform)
    })
getShitDone()










