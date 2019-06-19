const fs = require('fs');


var path = "/home/eliza/Documents/UCB-Code/classwork/06-Week/10-nodejs/01-Activities/15-BankJS/Unsolved/bank.txt";
var transaction = function (type, value){
let account = fs.readFileSync(path, "UTF-8",);
let output = account.split(",");
output.pop();
let balance = 0;
output.forEach(element => {
        balance += parseInt(element); 
    
    
});


switch(type){
case "balance":
    console.log(`your total balance is: ${balance}`)
    break;

case "deposite":
    balance += parseInt(value);
    fs.appendFileSync(path,`${value},`)
    console.log(`you deposited ${value} `);
    console.log(`your new balance is ${balance}`);
    break;

case "withdraw":
    balance -= parseInt(value);
    fs.appendFileSync(path,`-${value},`)
    console.log(`you withdrew ${value} `);
    console.log(`your new balance is ${balance}`);
    break;
case "loto":
    if(balance-value>0){
    balance-= parseInt(value);
    if(Math.floor(Math.random()*10) == Math.floor(Math.random()*20)){
        balance += parseInt(value)*5;
        fs.appendFileSync(path,`${parseInt(value)*5},`)
        console.log(`you won ${parseInt(value)*5}`)
        console.log(`your new balance is ${balance}`);
        break;
    }else{
        fs.appendFileSync(path,`-${value},`)
        console.log('sorry you didnt win')
        console.log(`your new balance is ${balance}`);
        break;
    }
}
else{
    console.log("you have no money");
}


}
}

transaction(process.argv[2],process.argv[3])