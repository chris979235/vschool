// arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]


// const func =arr.map(function(numbers){
//  return numbers *2
// })
// console.log(func)

function doubleNumbers(arr){
return arr.map(function(number){
 return number *2
})

}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//Take an array of numbers and make them strings


function stringItUp(arr){
  return arr.map(function(array){
    return array.toString()
  })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//////////////////////////
// 3) Capitalize each of an array of names
function capitalizeNames(arr){
  return arr.map(function(newArr){
   return newArr.charAt(0).toUpperCase() + newArr.slice(1)
  })
 }
 
 console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//////////////////////
function namesOnly(arr){
  return arr.map(function(array){
    return array.name.toString()
  })
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr){
  aged=18
  return arr.map(function(array){
    if (array.age>aged){
      return (array.name + " " +"can go to the movies")
    }else {return (" ")}
  })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
  return arr.map(function(array){
   let h1= document.createElement("h1")
   let h2= document.createElement("h2")
   let name=array.name
   let age=array.age
     h1.append(name)
     document.body.append(h1)
     h2.append(age)
   return document.body.append(h2)
  })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
