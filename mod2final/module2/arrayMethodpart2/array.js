// function sortedOfAge(arr){
//   arr= arr.sort(function(a, b){
//     b.length-a.length})
//   let me= arr.filter(function(filterArray){
//     aged=18
//    return filterArray.age>=aged
//   })
//   return me.map(function(newArr){
//     return ("<ul> " + newArr.lastName +" "+ newArr.firstName + " is " + newArr.age+ " years old" + "<ul>")
//   })
// }

function sortedOfAge(arr){
  return arr.reduce(function(finalArr, currentPerson){
    if (currentPerson.age>=18){
      finalArr.push("<ul> " + currentPerson.lastName +" "+ currentPerson.firstName + " is " + currentPerson.age+ " years old" + "<ul>")
    }
    return finalArr
  },[])
}


var peopleArray = [
  { firstName: "Sarah",
  lastName: "Palin",
  age: 47
},
{ firstName: "Frank",
lastName: "Zappa",
age: 12
},
{firstName: "Rick",
lastName: "Sanchez",
age: 78
},
{ firstName: "Morty",
lastName: "Smith",
age: 29
},
{ firstName: "Kyle",
lastName: "Mooney",
age: 27
},
{ firstName: "Pasha",
lastName: "Datsyuk",
age: 13
},
{firstName: "Lev",
lastName: "Tolstoy",
age: 82
}
]
console.log(sortedOfAge(peopleArray));




/*
Output: 
[ 
  "<li>Kyle Mooney is 27</li>",
  "<li>Sarah Palin is 47</li>",
   "<li>Rick Sanchez is 78</li>",
   "<li>Morty Smith is 29</li>",
   "<li>Lev Tolstoy is 82</li>" 
]
*/