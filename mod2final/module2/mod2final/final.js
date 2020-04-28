//page loads reads js skips over thenablebes to read all code goes back to
function deleted(deleteButton, data, div, ) {
  deleteButton.addEventListener("click", function () {
    axios.delete("https://api.vschool.io/chrisrees/todo/" + data._id)
      .then(response => {
        newItem(response.data)
        div.remove()
      })
      .catch(error => console.log(error))
  })
}
const todoform = document.todoform
todoform.addEventListener("submit", function (event) {
  event.preventDefault()
  todoform.title.value = ""
  const newToDo = {
    title: todoform.input1.value,
    description: todoform.input2.value,
    imgUrl: todoform.input3.value,
    price: todoform.input4.value
  }
  axios.post("https://api.vschool.io/chrisrees/todo/", newToDo)
    .then(response => {
      console.log("fired")
      newItem(response.data)
    })
    .catch(error => console.log(error))
})

function getdone() {
  axios.get("https://api.vschool.io/chrisrees/todo")
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {
        newItem(response.data[i])
      }
      response.data.forEach(function(todo){
        newItem(todo)
    })
})
}

function newItem(item) {
  const h1 = document.createElement("h1")
  data = item
  const div = document.createElement("div")
  document.getElementById("todolist").appendChild(div)
  h1.textContent = data.title
  if (data.completed) {
    h1.style.textDecoration = "line-through"
  }
  div.appendChild(h1)
  const h11 = document.createElement("h1")
  h11.textContent = data.description
  div.appendChild(h11)
  // if (data.completed){h11.style.textDecoration="line-through"}

  const h111 = document.createElement("img")
  h111.src = data.imgUrl
  div.appendChild(h111)
  // if (data.completed){h111.style.textDecoration="line-through"}
  const h1111 = document.createElement("h1")
  h1111.textContent = data.price
  div.appendChild(h1111)
  // if (data.completed){h1111.style.textDecoration="line-through"}
  const button = document.createElement("button")
  button.textContent = "linethrough"
  div.appendChild(button)
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "delete"
  div.appendChild(deleteButton)
  deleted(deleteButton, data, div)
  button.addEventListener("click", function event() {
    data.completed = !data.completed
    axios.put("https://api.vschool.io/chrisrees/todo/" + data._id, {
        completed: data.completed
      })
      .then(response => {
        if (response.data.completed) {
          h1.style.textDecoration = "line-through"
          // h11.style.textDecoration="line-through"
          // h111.style.textDecoration="line-through"
          // h1111.style.textDecoration="line-through"
        } else
          h1.style.textDecoration = "none"
        // h11.style.textDecoration="none"
        // h111.style.textDecoration="none"
        // h1111.style.textDecoration="none"
        console.log(response)
      })
      .catch(error => console.log(error))
  })
  console.log(response.data[i].completed)
  // }
  getdone()