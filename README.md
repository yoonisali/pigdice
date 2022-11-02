```
Describe: function dice();

Test: "It should generate a random number"
Code: function dice() {
    return Math.floor(Math.random() * 6) + 1;
    }
    dice();
Expected Output: Random Number generated from 1-6

Describe: function rollLogic()

Test: "It should keep track of player score. If player rolls a "1" it returns 0. 
Code: 


````



On load, it is player 1's turn

Roll dice button will generate random numnber and add that to the diceRoll. 
Each time player presses roll dice button, value will either be added to diceRoll, or (if === 1), player will be kicked out of turn with score 0

Hold button will add diceRoll to totalScore and the player will end their turn.


Function controlTurn: The player will be kicked out of turn if the genrated number is 1. If playerOne turn === true, the diceRoll will show up in playerOne column, and the hold button will add diceRoll to playerOne totalScore. "Hold" button, or rolling a 1, will change playerOne turn value to false, and assign playerTwo turn value to true. 

