// function collectAnimals(...arr) {  
//   console.log(arr)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// // Write a function that returns a food object with the array names as 
// // properties using Object Literals:


// function combineFruit(fruit, sweets, vegetables){
//   return {...fruit,...sweets,...vegetables}
// }

// // combineFruit(["apple", "pear"],
// //            ["cake", "pie"],
// //            ["carrit"])
// console.log(combineFruit({
//       fruit: ["apple", "pear"],
//       sweets: ["cake", "pie"],
//       vegetables: ["carrit"]
//    }))
//    ////////////////
//    const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
   
//    function parseSentence({location, duration}){
     
//      return `We're going to have a good time in ${location} for ${duration}`
//     }
//     console.log(parseSentence(vacation))
//     /////////
//     const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//  const [firstFav,,, secondFav, thirdFav]=arr
  
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

// console.log(returnFavorites(favoriteActivities))
//     ////////////////////////

//     function combineAnimals() {  
//       console.log (realAnimals.concat(...magicalAnimals,...mysteriousAnimals))
//     }
    
//     const realAnimals = ["dog", "cat", "mouse"];
//     const magicalAnimals = ["jackolope"];
//     const mysteriousAnimals = ["platypus"];
    
//     combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 
    
//     // ["dog", "cat", "mouse", "jackolope", "platypus"]
//     ///////////////
//     function product(a, b, c, d, e) {  
//       var numbers = [a,b,c,d,e];
    
//       return numbers.reduce(function(acc, number) {
//         return acc * number;
//       }, 1)
//     }
//     console.log(product(1,2,3,4,5))
//     /////////////////////
//     function unshift(array, a, b, c, d, e) {  
//       return [a, b, c, d, e].concat(array);
//     }
//     /////////////////////////////


    
//     function populatePeople(names){
//       return names.map(named => {
//           name = named.split(" ");
//           const [firstName,lastName]=name 
//           return {
//               firstName,
//                lastName,
//           }
//     })
//   }
//   console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  
  
//   //[
//   //  {firstName: "Frank", lastName: "Peterson"},
//   //  {firstName: "Suzy", lastName: "Degual"},
//   //  {firstName: "Liza", lastName: "Jones"},
//   //]
function collectAnimals(...animals) {  
  return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]