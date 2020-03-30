// capilizeAndLowercase("Hello") // => "HELLOhello"
//touppercase
// Make a function that will return any given string into all caps 
// followed by the same string all lowercase
function upperCase(string1 ){
  var upString=string1.toUpperCase()
  var downStream=string1.toLowerCase()
console.log (upString + downStream)
}
upperCase("hello andgoodbye")

//retun number half the length
//lenght diveide by 2 take remainder of lowest value
function middleIndex(str1){

 return Math.floor(str1.length /2)
}
let string=middleIndex("hell0")
console.log(string)
//////

function slick(str1){
 return str1.slice(0,Math.floor(str1.length /2))
}
let split=slick("hello world")
console.log(split)


/////
function half(string){
  let stringy=string.length
  let firstHalf = string.slice(0,Math.floor(stringy/2)).toUpperCase()
  let secondHalf = string.slice(Math.floor(stringy/2)).toLowerCase()
console.log(firstHalf+secondHalf)
} 
half("heplo")
//////////////////////
function everyOther(other){
  let tearInTwo = other.split(" ")
    for (i=0; i<tearInTwo.length; i++){
      let pieces=tearInTwo[i]
      tearInTwo[i]= pieces.charAt(0).toUpperCase()+pieces.slice(1)
    }
  return tearInTwo.join(" ")
}
console.log(everyOther("all dad fox git tom"))

// ["all", "dad", "fox", "git", "tom"]
// console.log("all git dad fox tom".split("t"))