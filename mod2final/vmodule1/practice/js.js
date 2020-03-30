var readlineSync = require('readline-sync');
readlineSync.question("you are trapped in a room what do you do")
let operator=["put hand in hole", "find key", "open door"]
let chooseOpp=readlineSync.keyInSelect(operator, "choose one");
let alive = false
let foundKey=false
while (alive=true && foundKey==false){

if (chooseOpp===0){
  console.log("you have died")
  break
}
if(chooseOpp===2){
  console.log("the door is locked")
  chooseOpp=readlineSync.keyInSelect(operator, "choose one");
}
if(chooseOpp===1){
  foundKey==true
if(readlineSync.keyInYN('you have found the key, would you like to escape')){

console.log("you have escaped")
alive==true
foundKey==true
break
}
else console.log("you are trapped forever")
continue
}
}

