const form=document.myForm

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log(form.gender.value)
})



const check = document.check

check.addEventListener("submit", (event) => {
  event.preventDefault()
  
  console.log(check.hello.value)
})

console.log(check.city.value)


// const form = document.myForm

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     // console.log(form.gender.value)
    
//     // console.log(form.entertainment)
    
//     const checkedInputs = []
    
//     for(let i = 0; i < form.entertainment.length; i++){
//         if(form.entertainment[i].checked){
//             checkInputs.push(form.entertainment[i].value)
//         }
//     }
// })

