
var readlineSync = require ("readline-sync");
var holey=false;
var keyMe=false;
var freeMe=false
var die=hole("die")
var foundKey=foundKey("you found the key")
var open=opendDoor("you opened the door")
readlineSync.question("you are stuck in a room what do you do");
var operation = ["hand in hole", "find the key", "open door;"];
var pickOpp=readlineSync.keyInSelect(operation, "choose operation");
checkResult(pickOpp)

if (holey===true){
  console.log(die);
  else if(keyMe===true){
    console.log(foundKey)
  }
  else if(freeMe===true)
  console.log(open)
}


function hole(die){
  return ("you have decided to :" + die);
}
function foundKey(foundKey){
  return ("you have decided to :" + foundKey)
}
function opendDoor(open){
  return ("you have decided to :" + open)
}



function checkResult(result) {
  if (result === 0) {
    holey = true;
  } else if (result ===1 ) {
   keyMe = true;
  } else if (result === 2) { 
    if (keyMe === true) {
      freeMe = true;
    } else {
      console.log("you need key to open door");
    }
  }
}






