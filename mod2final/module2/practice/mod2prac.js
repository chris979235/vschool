




const form1 = document.form1

// const number1=form.number1//

// const number2=form.number2//
form1.addEventListener("submit", function(event){
event.preventDefault()

const firstNumber=parseInt(form1.number1.value)
const lastNumber=parseInt(form1.number2.value)
document.getElementById("div1")

document.getElementById("total1").append(firstNumber+lastNumber)
})



// const form2 = document.form2
form2.addEventListener("submit", function(event){
event.preventDefault()
console.log(form2)
const firstNumber=parseInt(form2.number3.value)
const lastNumber=parseInt(form2.number4.value)
document.getElementById("div2")

document.getElementById("total2").append(firstNumber-lastNumber)
})

// const form3 = document.form3
form3.addEventListener("submit", function(event){
event.preventDefault()
console.log(form2)
const firstNumber=parseInt(form3.number5.value)
const lastNumber=parseInt(form3.number6.value)
document.getElementById("div3")
console.log(form3)
document.getElementById("total3").append(firstNumber/lastNumber)
})

// function parseNums(form){
//   let firstNumber,lastNumber
//   firstNumber=parseInt(form.number1.value)
//   lastNumber=parseInt(form.number2.value)

//   return [firstNumber, lastNumber]
// }

// form4.addEventListener("submit", function(event){
//   event.preventDefault()
//   numbers = parseNums(form4)
//   document.getElementById("total4").append(numbers[0] * numbers[1])
// })
