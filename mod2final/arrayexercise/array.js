function doubleNumbers(arr){
  arr.map(function(one){
    console.log(one*2)
  })
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
  arr.map(arrs =>{
    console.log(arrs.toString())
  })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
  arr.map(news => {
   upper=news[0].toUpperCase()
   lastpart=news.slice(1)
   console.log(upper+lastpart)
  })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
 // ["John", "Jacob", "Jingleheimer", "Schmidt"]//

 function namesOnly(arr){
  arr.map(arrs=>{
    console.log(arrs.name)
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
  arr.map(news =>{
    if (news.age>aged){console.log(`${news.name} can go to the movies`
    )} else  console.log(`${news.name} cannot go`)
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

function readyToPutInTheDOM(arr){
  arr.map(news=>{
    console.log(`<h1>${news.name}</h1><h2>${news.age}</h2>`)
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
//////////////////////////////////////////////[]////////////////////////////////////////////////////////////

function fiveAndGreaterOnly(arr) {
  arr.filter(num=>{
    if (num>5){
      console.log(num)
    }
  })
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function evensOnly(arr) {
  arr.filter(num=>{
    if(num % 2  ===0){
      console.log(num)
    }
  })
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

function fiveCharactersOrFewerOnly(arr) {
  arr.filter(five=>{
    if (five.length<=5){
      console.log(five)
    }
  })
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

function peopleWhoBelongToTheIlluminati(arr){
  arr.filter(mem=>{
    if(mem.member===true){
      console.log(mem)
    }
  })
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

function ofAge(arr){
  aged=18
  arr.filter(arrs=>{
    if (arrs.age>aged){
      console.log(arrs)
    }
  })
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]


///////////////////////////////////////[sort]///////////////////////////////////////////////////////

function leastToGreatest(arr) {
 arr.sort(function(a, b){
    return a - b
  })
  console.log(arr)
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

/////
function greatestToLeast(arr) {
  arr.sort(function(a, b){
    return b -a
  })
  console.log(arr)
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

function lengthSort(arr) {
    arr.sort(function(a, b){
      return a.length -b.length
    })
    console.log(arr)
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 


function alphabetical(arr) {
  arr.sort()
  
  console.log(arr)
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

function byAge(arr){
  arr.sort(function(a, b){
    return a.age -b.age
  })
  console.log(arr)
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]


//////////////////////////[reduce]///////////////////////////////
function total(arr) {

  const result1 = arr.reduce(function(final, current){
    final= final+current
    return final
  })
  console.log(result1)
}

console.log(total([1,2,3,4,5,6,7,8,9,10])); // 55


function stringConcat(arr) {
  const stringnum=arr.reduce(function(final,current){
return final+current
  },"")
  console.log(stringnum)
}

console.log(stringConcat([1,2,3])); // "123"


function totalVotes(arr) {
 const votee=arr.reduce(function(final,currrentvoter){
  if(currrentvoter.voted){
    final++
  }
  return final
 },0)  
 console.log(votee)
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7
//

function shoppingSpree(arr) {
const price=arr.reduce(function(final,currentprice){
  final=final+currentprice.price
  return final
},0)
console.log(price)
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005
//


function flatten(arr) {
 const arrays=arr.reduce(function(final, currentarray){
final=final.concat(currentarray)
return final
 },[]) 
 console.log(arrays)
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


