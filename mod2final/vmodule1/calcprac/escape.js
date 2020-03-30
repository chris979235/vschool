
var readlineSync = require('readline-sync');
readlineSync.question("you are trapped in a room what do you do");
let option=["put hand in hole", "find the key", "open the door"];
let choose=readlineSync.keyInSelect(option, "choose one");



if (choose===0){
  console.log("you die")
}else if(choose===1){
  console.log ("found the key")
}else if(choose===2){
  console.log("opend door your free")
}

