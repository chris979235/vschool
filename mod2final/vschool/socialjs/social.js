var goMilitary ={
name:"chris",
minimumAge: 18,
branches:["army", "airForce", "marines", "navy"],
militaryFriends:["jake", "grant", "borja", "charles"],
favoriteGuns:["mark 19", "m4", "m2", "m249", "m240"],
gunSound: "bangbang",
pewpew: function(){
  console.log(this.gunSound)
}
}
goMilitary.pewpew()
{
  console.log(goMilitary.name)
}
var militaryVehicles={
type:["humvee", "matvee", "stryker"],
driverAge: 18,
driverTest: "pass",
wantsToDrive: false,
vehicleNoise: "vroooooom",
vroom: function(){
console.log(this.vehicleNoise)
}
}
militaryVehicles.vroom()
goMilitary.minimumAge=19
console.log(goMilitary.minimumAge)
for (i = 0; i < goMilitary.branches.length; i++){
var item=goMilitary.branches[i]
console.log(item)
}
for(i=0; i<goMilitary.favoriteGuns.length; i++){
  var item=goMilitary.favoriteGuns[i]
  console.log(item)
}
for(i=0; i< goMilitary.militaryFriends.length; i++){
  var item=goMilitary.militaryFriends[i]
  console.log(item)
}
 if (goMilitary.minimumAge <= 18){
   console.log("cannot Join")
 }
else{
  console.log("you can join")
}
console.log(militaryVehicles.type[1])
console.log(militaryVehicles.type[2])
if (militaryVehicles.driverAge>= 18){
  console.log("can drive")
}
else{
  console.log("cannot drive")
}

