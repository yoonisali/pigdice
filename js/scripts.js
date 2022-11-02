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
        player = "playerOne";
    } else if (playerTwo.turn === true) {
        player = "playerTwo";
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
    if (diceRoll !== 1) {
        return diceRoll;
    } else if (diceRoll === 1) {
        changeTurn();
        return "You rolled a 1!" + " " + whosTurn() + "'s" + " " + "turn!";
    }
}

function holdButton() {
    diceRoll += totalScore;
    return playerTwo;
}


// UI Logic 

window.addEventListener("load", function () {

    document.querySelector(".btn-roll").addEventListener("click", rollLogic());
    document.querySelector(".btn-reset").addEventListener("click", function () {
        window.location.reload();
    });
    document.querySelector(".btn-hold").addEventListener("click", function () {

    })

})




