var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

var randomcallbackFunction = function(msg, callback){
try{
    fs.appendFile("path", msg, callback)
}
catch(err){

}
}

// Write a function that runs a function argument if
// its other argument is truthy.

var otherRandomFunction = function(funcArg, truthy){
    if(truthy){
        funcArg()
    }

}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
var thirdrandomFunction = function(funcArg, val){
    return function(){
        return funcArg(val)
    }
}



// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

fs.appendFile('log.txt', "message", function(){
console.log()


});