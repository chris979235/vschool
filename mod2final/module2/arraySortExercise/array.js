
function leastToGreatest(arr) {
  return arr.sort(function(a, b){
     a-b
  })
  }


console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 
  
 ///sort array by length
 function lengthSort(arr) {
   return arr.sort(function(a,b){
    return a.length-b.length
   })
 }
 console.log(lengthSort(["dog", "wolf", "by", "family", "eaten", "bootssss"])); // ["by", "dog", "wolf", "eaten", "family"] 
 
 /////////sort array alphebetically
 
 
 function lengthSort(arr) {
   return arr.sort(function(a,b){
     if (a>b){
       return +1
     }if (b>a){
       return -1
     }
     else {0}
     })
    }
  
  console.log(lengthSort(["dog", "wolf","boots","there", "by", "family", ])); // ["by", "dog", "wolf", "eaten", "family"]
  /////
  //sort by age
  function byAge(arr){
    return arr.sort(function(a,b){
     return a.age-b.age
    })
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]