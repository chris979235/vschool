//on 3 return fizz on 5 return buzz on 2 and 5 return fizzbuzz

for (let i=0; i<100; i++){
  console.log(i)
  if (i %3===0){
    console.log("fizz")
  } if (i %5===0){
  console.log("buzz")
}if (i %3===0 && i %5===0){
console.log("fizzbuzz")
}
}
