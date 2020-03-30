var readlineSync = require('readline-sync');
let num1=readlineSync.question("what is your first number")
let num2=readlineSync.question("what is your second number")
let operater=["add", "sub", "mul", "div"]
let chooseOpp=readlineSync.keyInSelect(operater, "choose one")

function addNum(num1, num2){
console.log("result is :" + (Number(num1) + Number(num2)))
}
function subNum(num1, num2){
  console.log("your number is :" + (Number(num1)- Number(num2)))
}function mulNum(num1, num2){
  console.log("your number is :" + (Number(num1)* Number(num2)))
}function divNum(num1, num2){
  console.log("your number is :" + (Number(num1)/ Number(num2)))
}

if (chooseOpp===0){
   addNum(num1, num2)
}else if (chooseOpp===1){
   subNum(num1, num2)
}else if (chooseOpp===2){
   mulNum(num1, num2)
}else divNum(num1, num2)
