let readlineSync = require('readline-sync');

const randomNumber = function(max, min) {
  return Math.floor((Math.random() * max) + min) // this line returns a random number between your max and min
}

const player = {
  name: readlineSync.question("welcome to hell road, you will certantly die \nwhat is your name \n"),
  hp: 200,
  inventory:[],
  attackMax:randomNumber(10,5),
  attackMin:randomNumber(5,1),
}

const randomItemDrop=["pickle", "gum","nothing","bag of tricks"]
const createEnemy=function (enemyName){
  return {
    name:enemyName,
    hp: randomNumber(40, 20),
    attackMax:randomNumber(10,5),
    attackMin:randomNumber(5,1),
    randomItemDrop:randomItemDrop[randomNumber(randomItemDrop.length, 0)],
    healthReward:randomNumber(15,5),
  }
}
let enemies=[createEnemy("austin powers"),createEnemy("dr evil"),createEnemy("mini me")]

while(enemies.length>0 && player.hp>0){
  const walkOrPrint=readlineSync.keyIn('press w to walk, random key for inventory\n', {limit: ['w', "print"]});
  if (walkOrPrint==="w"){
    if (Math.floor((Math.random() * 100 < 33))){
      const enemy=enemies[randomNumber(enemies.length, 0)]////enmey is telling you that you are grabbing a random number between length of array and 0
      while(enemy.hp>0&&player.hp>0){
        if(readlineSync.keyIn("you have encountered " + enemy.name +" \ndo you want to attack or run [a/r]",  {limit: ["a" ,"r"]})==="a") {
          const damageDealt = randomNumber(player.attackMax, player.attackMin)
          enemy.hp = enemy.hp - damageDealt
          console.log("you dealt " + damageDealt + " to " + enemy.name)
          console.log(enemy.name+" has "+enemy.hp + " health remaining")
        }
        else {  
          if (Math.floor(Math.random() * 100 < 50 )) {
            console.log("run")
            break
          }else {
            console.log("failed to run away")
          } 
        }
        const damageRecieved = randomNumber(enemy.attackMax, enemy.attackMin)//either after you attacked or failed to run away the enemy does damage to you
        player.hp = player.hp-damageRecieved
        console.log("you recieved " + damageRecieved + " damage")
        console.log("you have " + player.hp + " health remaining")
        if (enemy.hp<=0){
          enemies=enemies.filter(function(item){
            return item!==enemy
          })
          player.hp=player.hp+enemy.healthReward
          player.inventory.push(enemy.randomItemDrop)
          console.log("you killed enemy "+enemy.name)
          console.log("you recieved " + enemy.healthReward + " health and " + enemy.randomItemDrop +" has been added to inventory")
        }
      }
    }
  }else {
    console.log(player)
  }
}
if (player.hp<0){
console.log("gameover you suck")
}else {
  console.log("game over you survived hell road")
}



