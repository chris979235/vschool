// // write a function that takes two arrays. The arrays will only contain primative values
// // // Your function will return one array of all values that both arrays share
// // getSharedValues([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) //=> [2, 3, 10]
// // getSharedValues(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
// // // => ["zions", "arches"]


// // getSharedValue(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
// // getSharedValue([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) 

// // function getSharedValue(arr1, arr2){
// // for (i=0; i<arr1.length; i++){

// //   for(j=0; j<arr2.length; j++){
// //     if (arr1[i]===arr2[j]){
// //       console.log(arr1[i])
// //     }
// //   }
// //   }
// // }
// // getSharedValue(arr1, arr2)

// // function findIndex(arr, str) {
// //   string=arr.toString(str)
// //   string.findIndex(str)
// // }
// // findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3
// // findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5
// // findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1



// function sevenBoom(arr) {
//   for (let i=0; i<arr.length; i++){

//     if(arr[i].toString().split('').includes('7')){
//       return "boom"
//     }
//   }
//   return "no 7"
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
// // ➞ "Boom!"

// console.log(sevenBoom([8, 6, 33, 100]))
// // ➞ "there is no 7 in the array"

// console.log(sevenBoom([2, 55, 60, 97, 86])) 
// // ➞ "Boom!"



// ////////////////////
// function stringifyUrl(url, query){
//   const urls=`${url}?color=${query.color}&species=${query.species}`
//   console.log(222,urls)
// }
// const url = "http://localhost:8080/monkeys"
// const query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(url, query)
// // returns "http://localhost:8080/monkeys?color=black&species=howler"


// const alternatingSums = (arr) => {
//   const teamA = []
//   const teamB = []
//   // loop through our array
//   for(let i = 0; i < arr.length; i++){
//     // separate items into two different arrays
//     if(i % 2 === 0){
//       teamA.push(arr[i])
//     }else {
//       teamB.push(arr[i])
//     }
//   }
//   // use reduce method to get totals of each array
//   const teamATotal = teamA.reduce((total, current) => total + current,0)
//   const teamBTotal = teamB.reduce((total, current) => total + current,0)
//   // push totals into final array
//   return [teamATotal, teamBTotal]
// }

// console.log(alternatingSums([50, 60, 60, 45, 70])) // => [180, 105]
// console.log(alternatingSums([100, 50])) // => [100, 50]
// console.log(alternatingSums([80])) // => [80, 0]
// console.log(alternatingSums([100, 50, 50, 100])) // => [150, 150]
// console.log(alternatingSums([100, 51, 50, 100])) // => [150, 151]
// ////////////////////////////////////////////////////////////////////////////////

// Write your own Math.max() function
// Math.max() is a function that can take any amount of number arguments and will return the largest:
  // Ex: Math.max(10, 20, 30, 40, 0, 100) // returns 100
  // Ex: Math.max(10) // returns 10


  // function myMathMax(...nums){
  //   // default max value
  //   let max = -Infinity // this could also just be the first item, so nums[0]
  //   // iterate over the nums, find the largest
  //   for(let i = 0; i < nums.length; i++){
  //     if(nums[i] > max){
  //       max = nums[i]
  //     }
  //   }
  //   return max
  // }
  ​
  // console.log(myMathMax(20, 300, 30, 10)) // should return 300
  // console.log(myMathMax(100)) // should return 100
  ​
  // Extra: Write the Math.min() function!
    // same as the mathMax, except you use a "<" where the ">" is and start off at 
    // Infinity rather than -Infinity
  ​
  // Extra Extra: Do it without the rest operator
  ​
  // function mathMaxWithoutRest(){
  //   const nums = Object.values(arguments)
  //   // the rest is the same as the code above.
  // }
  ​///////////////////

  

  
  // const obj={
  //   firstname: "jane",
  //   lastname: "doe",
  //   age:100,
  // }
  
  
  // const printString = (hi) => {
  //   return ("hi "+hi.firstname+" "+ hi.lastname+" how does it feel to be "+hi.age)
  // }
  // console.log(printString(obj))


  // class Circle {
  //   constructor (radius) {
  //     this.radius = radius;
  //   }
  
  //   getArea() {
  //     return Math.PI * Math.pow(this.radius, 2);
  //   }
  
  //   getPerimeter() {
  //     return 2 * Math.PI * this.radius;
  //   }
  // }

