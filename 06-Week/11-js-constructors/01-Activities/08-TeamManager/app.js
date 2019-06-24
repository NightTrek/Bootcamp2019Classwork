var inquirer = require("inquirer");

var input = process.argv;
console.log(input);



//start of player constructor
var Player = function(name = 'Daniel', position = "attacker", offence=Math.floor(Math.random()*10), defence=Math.floor(Math.random()*10)){
this.name = name;
this.position = position;
this.offence = offence;
this.defence = defence;
}

Player.prototype.goodGame = function(){
let HeadsorTails = math.floor(Math.random());
    if(HeadsorTails>0){
        this.offence++;
    }
}

Player.prototype.badGame = function(){
    let HeadsorTails = math.floor(Math.random());
    if(HeadsorTails>0){
        this.defence--
    }
}

Player.prototype.printStats = function(){
    console.log(`
    ----------------------------------------------
    name:             ${this.name}                                      
    position:         ${this.position}           
    offence:          ${this.offence}            
    defence:          ${this.defence}            
    -----------------------------------------------`)

}

//player built int methods
var StartGame = async function(){
    for(let i =0;i<4;i++){
let newPlayer = await inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Player Name?",
      name: "name"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "player position",
      name: "position"
    }
  ])// end of await
  
    }
}