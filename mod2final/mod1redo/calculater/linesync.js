var readlineSync = require("readline-sync");
var num1= readlineSync.question("what is your first number");
var num2= readlineSync.question("what is your second number");
var operations=["add", "subtract", "multiply", "divide"];
let chooseOpp=readlineSync.keyInSelect(operations, "choose opertion")

function addNumber(num1, num2){
  console.log("result is :" + (Number(num1) + Number(num2)))
}function subNumber(num1, num2){
  console.log("result is :" + (Number(num1) - Number(num2)))
}function mulNumber(num1, num2){
  console.log("result is :" + (Number(num1) * Number(num2)))
}function divNumber(num1, num2){
  console.log("result is :" + (Number) (num1) / Number(num2))
}

if (chooseOpp === 0){
  addNumber(num1, num2)
}
  else if(chooseOpp === 1){
    subNumber(num1, num2)
  }
  else if (chooseOpp === 2){
    mulNumber(num1, num2)
  }
  else {
    divNumber(num1, num2)
  }


//cd ..   takes you back one directory (change directory) 
// cd ~ changes into home directory