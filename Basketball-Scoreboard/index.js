let homeEl = document.getElementById("home-score")
let btnEl = document.getElementById("btn")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
function addHomeScorebyOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}
function addHomeScorebyTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}
function addHomeScorebyThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}
let guestScore = 0
function addGuestScorebyOne() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function addGuestScorebyTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function addGuestScorebyThree() {
    guestScore += 3
    guestEl.textContent = guestScore
}