var readlineSync = require('readline-sync');
readlineSync.question('you are locked in a room what do you do')
operater=["put hand in hole", "find the key", "open the door"]
chooseOperation=readlineSync.keyInSelect(operater, "what do you do")
let alive=true
let hasKey=false

while (alive=true){


if (chooseOperation===0){
  console.log("you die")
  alive=false
}
  
  else if (chooseOperation===1){
console.log("found the key")
hasKey=true
}
if(hasKey=true readlineSync.keyInSelect("you have found the key")) {
  console.log("opened the door you are free")

}
else {console.log("you are trapped forever")}
}
