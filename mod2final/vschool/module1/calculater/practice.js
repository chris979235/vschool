let readlineSync = require("readline-sync");
let num1=readlineSync.question("please enter your first number")
let num2=readlineSync.question("please enter your second number")
let operation=["add", "sub", "mul", "div"];
let key=readlineSync.keyInSelect(operation, "choose opp")


function addNumber(num1, num2){
  console.log("result is :" + (Number(num1) + Number(num2)))
}
function subNumber(num1, num2){
  console.log ("result is :" +(Number(num1) - Number(num2)))
}
function mulNumber(num1, num2){
  console.log ("result is :" + (Number(num1) * Number(num2)))
}
function divNumber(num1, num2){
  console.log ("result is :" + (Number(num1) / Number(num2)))
}

if (key===0){
  addNumber(num1, num2)
}else if(key===1){
  subNumber(num1,num2)
}else if(key===2){
  mulNumber(num1,num2)
}
else divNumber(num1,num2)
