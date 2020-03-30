var loops = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i =0; i<loops.length; i++)
console.log(loops[i])

var loop = [0,9, 8, 7, 6, 5, 4, 3, 2, 1]
for (var i=0; i<loop.length; i++)
console.log(loop[i])

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i=0; i<fruit.length; i++)
console.log(fruit[i])
fruit.push("apple")

function loopThroughArray(array){
  for( var i =0; i < array; i++){
    console.log(array[i])
  }
}
loopThroughArray([1, 2, 3, 4, 5, 6])




for(var i = 0; i < 100; i++){
  if ([i] % 2 ===0){
    console.log([i])
    }
}


var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Ass hole"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for(i=0; i<peopleArray.length; i++){
  var item= peopleArray[i]
  console.log(item.name)
  console.log(item.occupation)
}
