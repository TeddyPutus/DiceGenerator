//function returns an array, containing two random values between 1 and 6.
function rollDice(){
var returnDice = [0, 0];

  var playerOneDice = Math.floor(Math.random() * 6); //random between 0 and 5
  playerOneDice += 1; //now it's between 1 and 6

  var playerTwoDice = Math.floor(Math.random() * 6); //random between 0 and 5
  playerTwoDice += 1; //now it's between 1 and 6

  returnDice[0] = playerOneDice;
  returnDice[1] = playerTwoDice;

  return returnDice;
}

//function changes each players image to show the correct dice value.
//Takes the dice roll (1 - 6) and the player number (1 or 2) as arguments
function changeImage(diceRoll, player)
{
  //concatenate player number and dice value into these strings
  var whichClass=".img" + player;
  var whichImage = "images/dice" + diceRoll + ".png";

  //change the image source or the correct player
  document.querySelector(whichClass).src = whichImage;
}

//main function
var playerDice = rollDice(); //get our dice rolls

//check who won, to change header
if(playerDice[0] > playerDice[1]){ //player one score is higher
  document.querySelector("h1").innerText = "Player 1 wins!";
}
else if(playerDice[0] < playerDice[1]){ //player two score is higher
  document.querySelector("h1").innerText = "Player 2 wins!";
}
else if(playerDice[0] === playerDice[1]){ //scores are equal
  document.querySelector("h1").innerText = "It's a DRAW!";
}

//change the dice images to show the scores
changeImage(playerDice[0], 1);//player 1
changeImage(playerDice[1], 2);//player 2
