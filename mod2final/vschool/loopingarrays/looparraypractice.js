
var officeItems = ["stapler", "moniter", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count=0
for (var i=0; i<officeItems.length; i++){
  var item = officeItems[i];
  if (item === "computer"){
    count++
  }
}
console.log(count)
    

   var furyRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
  var counted = 18

  for (var i = 0; i < furyRoad.length; i++){
    var item = furyRoad[i]
    if (counted > item.age)
    {
    console.log("not old enough")
    console.log(item.name)
  }
  }