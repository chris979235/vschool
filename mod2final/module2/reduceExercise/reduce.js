// // 1) Turn an array of numbers into a total of all the numbers

// function total(arr) {
//    const result1 = arr.reduce(function(final, num){
//         final = num+final
//         return final
//     })
//     return result1
// }

// console.log(total([1,2,3])); // 6
// ////////2) Turn an array of numbers into a long string of all those numbers.


// function stringConcat(arr) {
//   const longString= arr.reduce(function(final, long){
//     final = final+long.toString()
//     return final
//   })
//   return longString
// }
  

// console.log(stringConcat([1,2,3,4])); // "123"

// // 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//    const votes= arr.reduce(function(final, voter){
//      if (voter.voted===true){
//       final=final+1
//     }
//     return final
//     },0)
//     return votes
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7
// //////////////////////////////4) Given an array of all your wishlist items, 
// //figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//   return cost=arr.reduce(function(final, loopCost){
//    return final =final+loopCost.price
//   },0)
  
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005
// ///////////////////5) Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//   return arr.reduce(function(final, loop){
//     //  loop.map(function(over){
//     //    final.push(over)
//     // })to ways to skin the cat
//     final.push(...loop)
//     return final
//   },[])
// }

// var arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
// //////////////

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// ////////////6) Given an array of potential voters, return an object representing 
// ////////////the results of the vote
// function voterResults(arr) {
//   return voters = arr.reduce(function(object, currentVoter){
//     if (currentVoter.age <= 24){
//       object.youth = object.youth + 1
//       if (currentVoter.voted){
//         object.youngVotes = object.youngVotes+1
//       }
//     } else if (currentVoter.age <= 32 && currentVoter.age >= 25){
//       object.mids = object.mids + 1
//       if(currentVoter.voted){
//         object.midVotes = object.midVotes + 1
//       }
//     } else  {
//       object.olds = object.olds + 1
//       if (currentVoter.voted){
//         object.oldVotes = object.oldVotes + 1
//        }
//     }
//     return object
//   } ,{
//       youngVotes: 0,
//       youth: 0,
//       midVotes: 0,
//       mids: 0,
//       oldVotes: 0,
//       olds: 0 
//     }
//   )
// }

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { youngVotes: 1,
// youth: 4,
// midVotes: 3,
// mids: 4,
// oldVotes: 3,
// olds: 4 
// }
// */


