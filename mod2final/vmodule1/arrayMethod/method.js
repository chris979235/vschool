let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
// console.log(vegetables)
fruit.shift()
// console.log(fruit)

console.log(fruit.indexOf("orange"))

fruit.push(2)
// console.log(fruit)

let food=fruit.concat(vegetables)
console.log(food)

let lessFood=food.slice(5,6)
console.log(lessFood)

// lessFood.reverse()
// console.log(lessFood)