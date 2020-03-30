var readlineSync = require('readline-sync');
readlineSync.question("welcome to hell road you will die");
let name = readlineSync.question("what is your name \n");
let areEnemiesAlive=true
let isPlayerAlive=true

function minMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return randomNumber = Math.floor(Math.random() * (min - max + 1)) + min;
}

// players and enemies
const items=["disapiontment","despair","bankruptcy","shouldhave stayed at home"]

const player = {
  name: name,
  health: 80,
  attack: minMax(10, 5),
  items:[]
}
const enemies = [
  joker = {
    name: "joker",
    health: 50,
    attack: minMax(5, 1)
  },
  poisonIvy = {
    name: "poison ivy",
    health: 50,
    attack:  minMax(7, 1)
  },
  moneyProblems = {
    name: "moneyProblems",
    health: 50,
    attack: minMax(5, 1)
    
  },
]
function getRandomEnemy() {
  console.log("ran into random enemy")
  randomEnemyGenerator = Math.floor(Math.random() * enemies.length)

  const randomEnemy=enemies.splice(randomEnemyGenerator,1)[0]
  return randomEnemy
}

function battle(randomEnemy, player) {
  console.log("start battle")
  player.health = player.health - randomEnemy.attack;
  randomEnemy.health = randomEnemy.health - player.attack;
  if(randomEnemy.health<0){
    player.items.push(items[Math.floor(Math.random()*items.length)])
  }
  console.log("you have recieved "+ player.items)
  console.log(player)
  console.log(randomEnemy)

}

function randomEncounter(){

  const randomEnemy=getRandomEnemy()
  while (randomEnemy.health > 0 && player.health > 0) {
    runAttack=readlineSync.keyIn( "r to run, a to attack", {limit: "r/a/"});
    if (runAttack==="r"){
      Math.floor(Math.random() * 100 < 50 ) 
      console.log("run")
      break
    }
    else{
      (runAttack==="a")
    }
    battle(randomEnemy, player)
      
    }
  }
 
while(player.health>0&&enemies.length>0){
  walkInventory=readlineSync.keyIn("w to walk, i for inventory", {limit: "w/i/"});
  if (walkInventory==="i"){
    console.log(player)
  }else{
    if (Math.random() * 100 < 30) {
      randomEncounter()
    }else {
      continue
    }
  }
}
    count=0
    for (let i=0; i<enemies.length; i++){
      if (enemies[i].health >0)
      count++
      areEnemiesAlive =true
    }
    if (count===0&&areEnemiesAlive==false){
      console.log("all enemies are dead, you have safley traveled hell road")
    }
    if (player.health <0){
      isPlayerAlive=false
      console.log("you died you suck")
    }
        if(areEnemiesAlive=false){
          console.log("you have beaten hell road")
        }
  

    
