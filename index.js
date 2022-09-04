let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addOnePointHome() {
    homeCount += 1;
    homeScore.textContent = homeCount
}

function addTwoPointsHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThreePointsHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function addOnePointGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount
}

function addTwoPointsGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function addThreePointsGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function resetScore() {
    let resetGame = 0
    homeScore.textContent = resetGame;
    guestScore.textContent = resetGame;
    homeCount = resetGame;
    guestCount = resetGame;
}

