const readlineSync = require('readline-sync');
readlineSync.question("you have been trapped in a room what do you do")
let alive=true
let hasKey=false
let option=["put hand in hole", "find the key", "open the door"]
let choose=readlineSync.keyInSelect(option, "what do you do")


while (alive===true){
  if (choose===0){
    alive=false
    console.log("you die")
    break
  } else if(choose===1){
    console.log("you found the key")
    hasKey=true
  }else if (choose===2 && hasKey===false){
      console.log("door is locked")
  }
  if (hasKey===true){
    if (readlineSync.keyInYN("you have found the key would you like to escape")){
      console.log("you have escaped")
      break
    } else{
      console.log("you are trapped forever")
    }

  }if (readlineSync.keyInYN("you must find the key first")){
    console.log("find the key")
    hasKey=true
  }else{
    console.log("you are trapped forever")
  }
}
