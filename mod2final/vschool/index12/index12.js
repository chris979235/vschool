// var header = document.getElementById("header")
// console.log(header)
// header.style.color = "blue"
// var paragraph = document.getElementById("paragraph")
// paragraph.style.backgroundColor =  "red"

// var all = document.getElementById("all")
// all.style.backgroundColor= "green"
// document.body.style.backgroundColor = "green"


//fontSize, display, textAlign etx all can be done with javascript

// var className=document.querySelector("#header").className
// console.log(className)
// use classList not className

// var className=
// document.querySelector("#header").className.add("another")
// console.log(document.querySelector("#header").className)
// console.log(document.getElementById("header").className)
// document.getElementById("header").classList.toggle("another")
// if(true){
//   console.log("it is true")
// }
// if (3>5){
//   console.log("it is true")
// }
// else {
//   console.log("it is false")
// }
// if (2===3){
//   console.log("it is true")
// }
// else if (2 ===4){
//   console.log("two is equal to four")
// }
// else if (2===2){
//   console.log("two is equal to two")
// }

// if(5>3){
//   console.log("is greater than")
// }
var fat = "cat"
if (fat.length === 3){
  console.log("is the length")
}

var cat = "meow"
var dog = "bark"
if (cat === dog){
  console.log("they are the same")
}
else {
console.log("they are not the same")
}

var person = {
  name: "Bobby", 
  age: 12
}
if (person.age>18){
  console.log("can go to movies")
}
else{
  console.log("cannot go to movies")
}

if (person.name[0] = "B"){
  console.log("can go to the movies")
}
else {
  console.log("cannot go")
}


for (var i=0; i<10; i+=2){
  console.log("im getting foood for dinner")
}

var favFoods = ["pizza", "pasta", "ice cream", "bannana"]
for (var i=0; i< favFoods.length; i++)
console.log(favFoods[i])

var numbers=[1, 2, 3, 4, 5, 6, 7, 8,]

for (var i=0; i < numbers.length; i++){
  if (numbers[i] % 2 ===0){
    console.log(numbers[i])
  }
}

for (var i=0; i<11; i++){
  if ([i] % 2 ===0) {
    console.log("it is even")
  }
  else{
    console.log("it is odd")
  }
  }
 
  


  var officeItems = ["stapler", "moniter", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0
for (i = 0; i < officeItems.length; i++){
var item = officeItems[i]
console.log (item)
if (item === "computer"){
count = count +1
}
}
console.log (count)
    //
var furyRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 
var counted=18
for (var i=0; i<furyRoad.length; i++){
  var old=furyRoad[i]
  if (counted < old.age) {
    console.log("cannot go to movies")
  }
}

function sum(an1,an2){
return an1 + an2
}
var result = sum(9,5)
console.log(result)

function namedFunc(data){
console.log(data)
}
namedFunc("hello")
namedFunc(false)
namedFunc([0, 1, 2, 3, 3])
namedFunc({name: "joe"})

function loopArray(array){
for(var i=0; i<array.length; i++){
  console.log(array[i])
}
}


loopArray([1, 2, 3, 4, 5, 6, 7])
//////////////////
function sum(a1, a2){
return a1+a2
}
var result =sum(4,5)
console.log(result)

function sum(joe){
return joe
}
var result =sum("hello joe")
console.log(result)
//////////////////////////


function sum(nm1, nm2){
  return nm1 + nm2
}
var result = sum(5, 5)
  console.log(result)
///
  function findMax(a,b,c){
    var maxNum = Math.max(a,b,c);
    console.log(maxNum);
    }
    findMax(3,17, 54)
   ///
function largeNumber(num1, num2, num3){
  var bigNum = Math.max(num1, num2, num3);
  console.log(bigNum);
}
 largeNumber (12, 13, 22)
///

function sum(am1,am2){
return am1 +am2
}
var result = sum(4,5)
console.log(result)

function findMax(a1, a2, a3){
  var maxNum = Math.max(a1, a2, a3);
  console.log(maxNum)
}
findMax(230,240,11)
//////
function evenOrOdd(number){
  if (number % 2 ===0){
  return "even"
}
else 
{
  return "odd"
}
}
var numberResult = evenOrOdd(2)
console.log(numberResult)
////////

function longString(string){
  if ( string.length > 20 ){
    return "string" + "string"
  }
  else 
  {
    return "string"
  }
  }
  
  var string = longString("only one string over 20 words")
  console.log(string)
  /////////////////////////////////////////
  var goMilitary ={
    name:"chris",
    minimumAge: 18,
    branches:["army", "airForce", "marines", "navy"],
    militaryFriends:["jake", "grant", "borja", "charles"],
    favoriteGuns:["mark 19", "m4", "m2", "m249", "m240"],
    gunSound: "bangbang",
    pewpew: function(){
      console.log(this.gunSound)
    }
    }
    goMilitary.pewpew()
    {
      console.log(goMilitary.name)
    }
    var militaryVehicles={
    type:["humvee", "matvee", "stryker"],
    driverAge: 18,
    driverTest: "pass",
    wantsToDrive: false,
    vehicleNoise: "vroooooom",
    vroom: function(){
    console.log(this.vehicleNoise)
    }
    }
    militaryVehicles.vroom()
    goMilitary.minimumAge=19
    console.log(goMilitary.minimumAge)
    for (i = 0; i < goMilitary.branches.length; i++){
    var item=goMilitary.branches[i]
    console.log(item)
    }
    for(i=0; i<goMilitary.favoriteGuns.length; i++){
      var item=goMilitary.favoriteGuns[i]
      console.log(item)
    }
    for(i=0; i< goMilitary.militaryFriends.length; i++){
      var item=goMilitary.militaryFriends[i]
      console.log(item)
    }
     if (goMilitary.minimumAge <= 18){
       console.log("cannot Join")
     }
    else{
      console.log("you can join")
    }
    console.log(militaryVehicles.type[1])
    console.log(militaryVehicles.type[2])
    if (militaryVehicles.driverAge>= 18){
      console.log("can drive")
    }
    else{
      console.log("cannot drive")
    }
    
var number= [0, 1, 2, 3, 4 ,5 ,6, 7, 8, 9] 
for (var i=0; i<number.length; i++);
console.log(number)


var fruit =["bannana", "orange", "apple", "kiwi"]
for (var i=0; i<fruit.length; i++);
console.log(fruit)

//selecting elements from page, either single of multiple
//getElementById
//GetElemengByClass

