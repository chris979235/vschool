// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
  return arr.filter(function(numbers){
    if (numbers>=5){
      return numbers
    }
  })
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
return arr.filter(function(numbers){
  if (numbers %2==0)
  return numbers
})
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

///////////////

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(function(five){

    if (five.length<=5){
      return five
    }
  })
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

///////
function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(function(partOfAcult){
    if (partOfAcult.member==true){
    return partOfAcult}
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


// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
function ofAge(arr){
  return arr.filter(function(young){
    age =18
    if (young.age>=age){
      return young
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