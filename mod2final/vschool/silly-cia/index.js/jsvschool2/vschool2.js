var myNumber =[1, 2, 3, 4, 5]
var colors = ["red", "blue", "green", "orange", "yellow" ]
var names = ["steve", "richy", "becky", "betty", "sarah"]
console.log(colors.length)
console.log(myNumber[3])
console.log(names[3])
console.log(names[4])
//steve is 0 indexed


// Logic operators
    //  && - and
    //  || - or
    //   ! - not

if (2 === 4){
console.log("two is equal to four")
}
else if (2 === 5){
  console.log("two is equal to five")
} 
else if (2 === 3){
  console.log("two is equal to three")
}
else {
  console.log("i dont know what is going on")
}


// <, >, <=, >=, ==, ===, !=, !==
if ( 5 < 3){
  console.log ("how are you")
}
else{
  console.log ("i am fine" )
}
// Logic operators
    //  && - and
    //  || - or
    //   ! - not

if(2 === 2 && 2 ===3){
  console.log ("its working")
} else {
  console.log ("its not working")
}

// order of operations  + - * / () in parenthases first

if( 2===2 && 3===3) {
  console.log ("its working")
}
else {
  console.log ("its not working")
}
//switch statement
//default for if it variables dont match

var color = "blue"
switch(color){
  case "red":
    console.log("the color is red")
    break
    case "blue":
      console.log("the color is blue")
      break
      case "green":
        console.log("the color is green")
        break
        default:
          console.log(" the color is not availabe")
}
var cat = 34
var dog = 11
if ( 5 > 3 ){
  console.log("is greater than")
}
if (cat === 3) {
  console.log("is the length")
}
else if (cat != dog){
  console.log("is not true")
}

var person = {
name: "bill",
age: 21,
}
if (person.age > 18){
  console.log (person.name + "can go to movies")
}
else {
 console.log ("you cannot go")
}

if (person.name[0] === "b" && person.age>18){
  console.log ("can go to movies")
}

if (1 === "1"){
console.log("loose")
}
else {
console.log ("not equal at all")
}
if (1 <= 2 && 2 < 4){
console.log ("then i am a winner")
}
if (typeof "cow" === "string"){
console.log ("IS A STRING")
}
if (typeof true === "boolean"){
console.log ("is a boolean")
}
var variable = 7
console.log (typeof variable)
if (typeof variable === "Array"){
  console.log ("defined")
} 

//node filename command shift p
