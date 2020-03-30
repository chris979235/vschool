/*4 funcs that add sub mult and dividePlease enter your first number (store that number)
Please enter your second number (store that number)
Please enter the operation to perform: add, sub, mul, div (then store the operation)
Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
You will then print to the console: The result is: [the result]*/

let readlineSync = require('readline-sync');
let num1=readlineSync.question("what is your first number");
let num2=readlineSync.question("what is your second number");
let option=["add", "subtract", "multiply", "divide"];
choose = readlineSync.keyInSelect(option, "your modifier")

function add(num1, num2){
  console.log ("result is " + (Number(num1) + Number(num2)))
}
function sub(num1, num2){
    console.log ("result is " + (Number(num1) - Number(num2)))
  }
  function mul(num1, num2){
    console.log ("result is " + (Number(num1) * Number(num2)))
  }
  function div(num1, num2){
      console.log ("result is " + (Number(num1) / Number(num2)))
    }
  



if (choose===0){
  add (num1, num2)
}else if(choose===1){
  sub(num1,num2)
}else if (choose===2){
  mul(num1, num2)
}else div(num1, num2)
