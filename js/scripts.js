// Buisness Logic

function dice() {
    return Math.floor(Math.random() * 6) + 1
}

function Player(turn) {
    this.totalScore = 0;
    this.diceScore = 0;
    this.turn = turn
}

let playerOne = new Player(true);
let playerTwo = new Player(false);

function whosTurn() {
    let player;
    if (playerOne.turn === true) {
        player = playerOne;
    } else if (playerTwo.turn === true) {
        player = playerTwo;
    }
    return player;
}

function changeTurn() {
    if (playerOne.turn === true) {
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {
        playerOne.turn = true;
        playerTwo.turn = false;
    }
}

function rollLogic() {
    let diceRoll = dice();
    let player = whosTurn();
    if (diceRoll !== 1) {
        player.diceScore += diceRoll;
    } else if (diceRoll === 1) {
        player.diceScore = 0;
        changeTurn();
    }
}

function hold() {
    let player = whosTurn();
    player.totalScore += player.diceScore;
    player.diceScore = 0;
    changeTurn();
}

// function reset () {
//     window.location.reload();
// }

// UI Logic 

document.querySelector(#)
document.querySelector

window.addEventListener("load", function () {

    document.querySelector(".btn-roll").addEventListener("click", rollLogic());
    document.querySelector(".btn-hold").addEventListener("click", hold());
    document.querySelector(".btn-reset").addEventListener("click", reset ());


});
