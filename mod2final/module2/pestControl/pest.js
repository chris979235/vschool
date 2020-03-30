const form=document.myForm1
form.addEventListener("submit", (event) => {
event.preventDefault()
let totalFucks=form.e1.value*5
let h1=document.createElement("h1")
h1.id="h1"
h1.textContent= form.e1.value * 5 + (" fucks to give")
document.getElementById("container1").appendChild(h1)
console.log("you give" +" "+ totalFucks+" "+ "fucks")
})

const form2=document.myForm2
form2.addEventListener("submit", (event) => {
event.preventDefault()
let totalFucks=form2.e2.value*7
let header1=document.createElement("h1")
header1.id="h1"
header1.textContent= form2.e2.value * 7 + (" fucks to give")
document.getElementById("container2").appendChild(header1)
console.log("you give" +" "+ totalFucks+" "+ "fucks")
})

const form3=document.myForm3
form3.addEventListener("submit", (event) => {
event.preventDefault()
let totalFucks=form3.e3.value*11
let header=document.createElement("h1")
header.id="h1"
header.textContent= form3.e3.value * 11 + (" fucks to give")
document.getElementById("container3").appendChild(header)
console.log("you give" +" "+ totalFucks+" "+ "fucks")
})