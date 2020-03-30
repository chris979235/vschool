// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// => 8
// console.log(Math.max(...arr))
// Fully understand the problem
// Plan out a solution
// Carry out your plan
// Review the solution

let arr=[1, 2, 333, 4, 65, 123, 34]

function largestNum(arr) {
  let largestNum = 0
  for ( i = 0; i < arr.length; i++) {
  if ( arr[i] > largestNum )
  {largestNum = arr[i]
  }
  }
  console.log(largestNum)
  }
largestNum(arr)




//Write a function that takes an array of words and a 
//character and returns each word that has that character present.
// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]
// /^[A-Za-z]+$
// ("[a-zA-z]{1}")

let array=["#3", "$$$", "C%4!", "Hey!"]

function anonymous(array){
  for (let i=0; i<array.length; i++){
    const aThroughZ=/[a-zA-z]/;
    let loop=array[i]
    if(loop.match(aThroughZ)){
      console.log(loop)
    }
    }
  }
anonymous(array)

//////////Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(10, 5) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false
//
function dividable(num1, num2){
  if (num1 / num2 %2===0){
    console.log(true)
  }
  else console.log(false)
}
dividable(100,25)
///////////////////




