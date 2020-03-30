// write a function that takes two arrays. The arrays will only contain primative values
// // Your function will return one array of all values that both arrays share
// getSharedValues([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) //=> [2, 3, 10]
// getSharedValues(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
// // => ["zions", "arches"]


getSharedValue(["zions", "arches", "yosemite"], ["zions", "arches", "goblin valley"])
getSharedValue([2, 4, 2, 5, 6, 3, 10], [3, 2, 1, 1, 10, 13]) 

function getSharedValue(arr1, arr2){
for (i=0; i<arr1.length; i++){

  for(j=0; j<arr2.length; j++){
    if (arr1[i]===arr2[j]){
      console.log(arr1[i])
    }
  }
  }
}
getSharedValue(arr1, arr2)

