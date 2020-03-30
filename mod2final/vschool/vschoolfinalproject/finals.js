


var G = document.getElementById("G")
G.style.color = "blue"

var o = document.getElementById("o")
o.style.color = "red"

var o2 = document.getElementById("o2")
o2.style.color = "yellow"

var g = document.getElementById("g")
g.style.color = "blue"

var l = document.getElementById("l")
l.style.color = "green"

var e = document.getElementById("e")
e.style.color = "red"

var images = document.getElementById("images")
images.addEventListener("click", function () {
  alert("images clicked")
})


var gmail = document.getElementById("gmail")
gmail.addEventListener("click", function () {
  alert("gmail clicked")
})

var store = document.getElementById("store")
store.addEventListener("mouseover", scroll)
function scroll() {
  document.getElementById("store").style.backgroundColor = "red"
}
store.addEventListener("mouseout", over)
function over() {
  document.getElementById("store").style = "none"
}

var about = document.getElementById("about")
about.addEventListener("mouseover", roll)
function roll() {
  document.getElementById("about").style.backgroundColor = "blue"
}
about.addEventListener("mouseout", rover)
function rover() {
  document.getElementById("about").style = "none"
}




var type = document.getElementById("type")

var button1 = document.getElementById("button1")
button1.addEventListener("mouseover", hovers)
function hovers() {
  document.getElementById("button1").style.backgroundColor = "green"
}
button1.addEventListener("mouseout", goAway)
function goAway() {
  document.getElementById("button1").style = "none"
}


var button2 = document.getElementById("button2")
button2.addEventListener("click", clicker)
var wordArray = ['i', 'am', 'just', 'going', 'through', 'a', 'loop'];
var counter = 0;
function clicker() {
  document.getElementById("button2").innerHTML = wordArray[counter];
  counter++;
}



var longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0; i < longArray.length; i++) {
  console.log(longArray[i])
}

var number = 0
if (number > 5) {
  alert("nine is greater than five")
}
else if (number === 8) {
  alert("nine is equal to eight")
}
else {
  alert("if, else if, else")
}

var object = {
  name: "chris",
  age: 29,
  goals: "join v school, become a succusful programmer"
}
console.log(object["name"])
console.log(object.goals)


var array=["one", "two", '3', '4']
console.log(array[0])







