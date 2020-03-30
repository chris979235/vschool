// let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", 
// "computer", "lamp", "stapler", "computer",  "computer"]

// let count=0
// for (let i=0; i<officeItems.length; i++){
//   let item=officeItems[i]
//   if(item==="computer"){
// count++}
// }
// console.log(count)
///////////////////////////////////


// var furyRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ] 
// let counted=18
// for (i=0; i<furyRoad.length; i++){
//   let item=furyRoad[i]
//   if (counted > item.age){
//     console.log(item.name +"cannot go")
//   }else if (counted <item.age){
//     console.log(item.name + "can go")
//   }
// }

// for (i=0; i<=10; i++){
//   console.log(i)
// }

// for (i=10; i>=0; i--){
//   console.log(i)
// }


// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i=0; i<fruit.length; i++){
//   console.log(fruit[i])
// }
/*
var name = "rick" // kcir
var splitName = name.split("")
var reversedArr = splitName.reverse()
var reversedName = reversedArr.join("")

var allAtOnce = name.split("").reverse().join("")
*/


// function Car(make, model, year, honkSound){
//   this.make = make
//   this.model = model
//   this.year = year
//   this.honkSound = honkSound
//   this.honk = function(){
//       console.log(this.honkSound)
//   }
// }

// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")


// Car.prototype.honk = function(){
//    console.log(this.honkSound)
// }

// jeep.honk()
// mazda.honk()

employees=[]
function Employee(name, jobTitle, salary, status="has a job"){
this.name=name
this.jobTitle=jobTitle
this.salary=salary
this.status=status
this.printEmployeeForm=function(){
  console.log(this.jobTitle)
}
}
let person1 = new Employee("erik", "teacher", 5000, "full time" )
let person2 = new Employee("chris", "teacher", 4500,)
let person3 = new Employee("jim", "teacher", 5500, "full time" )

employees.push(person1, person2, person3)
console.log (employees)

person3.printEmployeeForm()

////////how to put unlimited numers as a parameteer use ... followed by paramiter
function maxNumber(...nums){
  console.log(nums)
}

maxNumber(0, 3, 58, 20)
////////////////////copies all future items from array and adds to new array
const colors1 = ["red", "blue"]
const colors2 = ["yellow", "green"]

const allColors = [...colors1, ...colors2]

// also a good way to make copies
const person = {
  name: "rick",
  age: 50
}

const personCopy = { ...person }
/////////////temporate literals using the back tick `` `just left of the number1`
// const name = "joe"
// "hi " + name
// const greeting = `hi ${name}`
// is the same as ("hi " + name)


// import & export//
// require()
// module.exports

////fat arrow funcitons
//both funcitons are the same
const sum2 = function(){
}
//
const sum2ES6 = word => {
  console.log(`ES6 is ${word}!`)
}
//
addEventListener("click", () => {
    
})
//object literals
const blue = "blue"
const green = "green"
const red = "red"

const colors = { red, green, blue }

console.log(colors)
///object destructering
const user = {
  username: "joe123",
  age: 20,
  _id: "f892jf2jf98j39fj"
}
const { username, age } = user
console.log(username)
//array destructering
const names = ["john", "betty", "nick"]
const [item1, item2, item3] = names
console.log(item2)