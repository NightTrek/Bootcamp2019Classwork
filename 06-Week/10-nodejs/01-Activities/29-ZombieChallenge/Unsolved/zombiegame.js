// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================


var inquirer = require("inquirer");

var zombieHealth = 100;
var yourHealth = 100;

var playerTurn = true;


var HandleEnemyTurn = function(){
let enemyroll = Math.floor(Math.random()*Math.floor(Math.random()*25))
yourHealth -= enemyroll;
console.log(`your health is ${yourHealth} and you took ${enemyroll} damage`)
if(yourHealth>0){
    getUserIntput();
}
else{
    console.log('you loose sucker');
}

}

var getUserIntput = async function(){
    try{
const response = await inquirer.prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "pick a number to roll the dice",
      choices: ["1", "2", "3","4","5"],
      name: "number"
    }
  ]);
  console.log(response.number);
  let playerRoll = Math.floor(Math.random()*(25+Math.floor(Math.random()*response.number)));
  zombieHealth -= playerRoll;
  console.log(`zombies health is: ${zombieHealth} and you did ${playerRoll} damage`)
  if(zombieHealth<1){
      console.log("victory is ours!")
  }
  else if(yourHealth>1){
      HandleEnemyTurn()
  }
  else{
      console.log("you lost")
  }
}
catch(err){
    return console.log(err);
}

}

getUserIntput()
// .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//       console.log(` your pizza topings: ${inquirerResponse.pizza}`)
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   })