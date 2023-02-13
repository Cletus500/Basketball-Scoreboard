let homeEl = document.getElementById("home-score")
let btnEl = document.getElementById("btn")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
function add1() {
    homeScore += 1
    homeEl.textContent = homeScore
}
function add2() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function add3() {
    homeScore += 3
    homeEl.textContent = homeScore
}
let guestScore = 0
function addOne() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function addTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function addThree() {
    guestScore += 3
    guestEl.textContent = guestScore
}