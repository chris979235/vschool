let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
//////////////////////////////

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables= (arr) =>{
    return arr.map( carrot => {
        return { type: "carrot", name: carrot }
    })
}
//////
const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

const filterForFriendly= arr => {
  return arr.filter(person =>{
      return person.friendly
  })
}

console.log(filterForFriendly(people))
//////////////

doMathSum =(a, b) => {
  return a + b
}

var produceProduct = (a, b) => {
  return a * b
}
console.log(doMathSum(1,5))
console.log(produceProduct(4,5))
//////////////
const obj={
  firstname: "jane",
  lastname: "doe",
  age:100,
}


const printString = (hi) => {
  return ("hi "+hi.firstname+" "+ hi.lastname+" how does it feel to be "+hi.age)
}
console.log(printString(obj))
///////////////////////////////

const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

const filterForDogs=arr =>{
   return arr.filter(animal => {
       if (animal.type === "dog") {
           return true
       } else {
           return false
       }
   })
}
console.log(filterForDogs(animals))

