const form=document.myForm
form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(form.firstName.value)
  console.log(form.lastName.value)
  console.log(form.age.value)
  console.log(form.city.value)
  const arr=[]
  for (let i=0; i<form.diet.length; i++){
    if (form.diet[i].checked){
      arr.push(form.diet[i].value)
    }
  }
  console.log(arr)
})




