// write a function that takes two arrays. The arrays will only contain primative values
// // Your function will return one array of all values that both arrays share
// getSharedValues([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) //=> [2, 3, 10]
// getSharedValues(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
// // => ["zions", "arches"]


// getSharedValue(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
// getSharedValue([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) 

// function getSharedValue(arr1, arr2){
// for (i=0; i<arr1.length; i++){

//   for(j=0; j<arr2.length; j++){
//     if (arr1[i]===arr2[j]){
//       console.log(arr1[i])
//     }
//   }
//   }
// }
// getSharedValue(arr1, arr2)

// function findIndex(arr, str) {
//   string=arr.toString(str)
//   string.findIndex(str)
// }
// findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3
// findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5
// findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1



function sevenBoom(arr) {
  for (let i=0; i<arr.length; i++){

    if(arr[i].toString().split('').includes('7')){
      return "boom"
    }
  }
  return "no 7"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
// ➞ "Boom!"

console.log(sevenBoom([8, 6, 33, 100]))
// ➞ "there is no 7 in the array"

console.log(sevenBoom([2, 55, 60, 97, 86])) 
// ➞ "Boom!"



////////////////////
function stringifyUrl(url, query){
  const urls=`${url}?color=${query.color}&species=${query.species}`
  console.log(222,urls)
}
const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}
stringifyUrl(url, query)
// returns "http://localhost:8080/monkeys?color=black&species=howler"