const fs = require('fs');

let file = fs.readFileSync("/home/eliza/Documents/UCB-Code/classwork/06-Week/10-nodejs/01-Activities/13-BestThingsEver/Unsolved/best_things_ever.txt", 'utf8');
let output = file.split(",");
for (key in output ){
    console.log(output[key])

}