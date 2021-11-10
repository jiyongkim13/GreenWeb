const counterpork = document.querySelector(".counterpork")
const counterbeef = document.querySelector(".counterbeef")
const counterchick = document.querySelector(".counterchick")
let numberpork = document.querySelector(".numberpork")
let numberbeef = document.querySelector(".numberbeef")
let numberchick = document.querySelector(".numberchick")
let i = 0
let p = 0
let b = 0

function countpork() {
  p++
  numberpork.innerHTML = p
}

function countbeef() {
  i++
  numberbeef.innerHTML = i
}

function countchick() {
  b++
  numberchick.innerHTML = b
}



counterpork.addEventListener("click", countpork)
counterbeef.addEventListener("click", countbeef)
counterchick.addEventListener("click", countchick)