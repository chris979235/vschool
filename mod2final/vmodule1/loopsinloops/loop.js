// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
   

// function forception(people, alphabet){
//   const arr=[]
//   for (i=0; i<people.length; i++){
//     arr.push(people[i])

//     for(j=0; j<alphabet.length; j++){
//       arr.push(alphabet[j])
//     }
//   }
//   return arr
// }


// console.log(forception(people, alphabet))





// console.log(1, 2, 3, "hello" ,3 ,4)

// function log(first, ...logs){
//   console.log(first)
//   console.log([first, ...logs, first])
// }



// log(1,2,3, "hello", 3, 4, "hi", 28 )

// numbersArr=[23, 34, 45, 56, 67, 687,{
//   age: 56,
// }]
// console.log({...numbersArr[3]})

age=18
person={
  age:25,
  dead: false,
  hair: "brown",
  name:"chris",
}
// console.log({...person})

personEdits={
age: 34,
name: "john"
}

console.log({...person,...personEdits})