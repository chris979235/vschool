
var officeItems = ["stapler", "moniter", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0
for (i = 0; i < officeItems.length; i++){
var item = officeItems[i]
console.log (item)
if (item === "computer"){
count = count +1
}
}
console.log (count)

