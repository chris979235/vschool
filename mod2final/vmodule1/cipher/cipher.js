//take 2 functions one that takes first 
//number off 2nd that adds to end of string

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// var shift = parseInt(readline.question('How many letters would you like to shift? '));

function shifty(arr){
  console.log(arr)
  let splits = arr.split("")
  let shifts =splits.shift()
  splits.push(shifts)

  console.log(splits)
  console.log(shifts)
}
shifty(input)
