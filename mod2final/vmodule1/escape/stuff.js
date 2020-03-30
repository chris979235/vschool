var readlineSync = require('readline-sync');
let num1=readlineSync.question("what is your first number")
let num2=readlineSync.question("what is your second number")
let option=["add", "sub", "mul", "div"]
let choose=readlineSync.keyInSelect(option, "choose one")

function addNum(num1, num2){
  console.log (Number(num1) + Number(num2))
}
function subNum(num1, num2){
  console.log (Number(num1) - Number(num2))
}
function mulNum(num1, num2){
  console.log (Number(num1) * Number(num2))
}
function divNum(num1, num2){
  console.log (Number(num1) / Number(num2))
}

if (choose===0){
  addNum(num1,num2)
}else if (choose===1){
  subNum(num1, num2)
}else if (choose===2){
  mulNum(num1, num2)
}else divNum(num1, num2)