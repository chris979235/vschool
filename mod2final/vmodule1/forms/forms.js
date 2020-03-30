// const form=document.getElementById("form")
//works but not best practice use name attribute
//submit event

const form = document['myForm']

form.addEventListener("submit", function(event){
event.preventDefault()

const firstName = form.firstName.value
const lastName = form.lastName.value
form.firstName.value=""
form.lastName.value=""
console.log(firstName +""+ lastName)

const h1 = document.createElement("h1")

h1.textContent = firstName + ' ' + lastName 
document.getElementsByTagName("body")[0].append(h1)
})


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
