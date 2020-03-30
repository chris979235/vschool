// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  return arr.map(function(newarr){
    return newarr *2
  })
  
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
function stringItUp(arr){
  return arr.map(function(newArr){
    return newArr.toString()
  })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr){
 return arr.map(function(newArr){
  return newArr.charAt(0).toUpperCase() + newArr.slice(1)
 })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]