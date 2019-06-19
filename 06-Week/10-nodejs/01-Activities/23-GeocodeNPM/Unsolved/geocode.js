// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "Hx2TYverehEb4vEgSAfSeqfNcVSJUFvz"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);



// Take in the command line arguments
const meh = process.argv;

// Build your address as an array or string
 var addressBuilder = function(array){
  return JSON.stringify(array.slice(2), null, 2);
 }

addressBuilder(meh);

var getLocationData = async function (string) {
  console.log(string);
  try {
    var geocode = await geocoder.geocode(string)
    console.log(geocode)
  }
  catch (err) {
    console.log(err);
  };

}
let test = addressBuilder(meh)
console.log(test)
getLocationData(test)
// Then use the geocoder object to search the address
