// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
// var database = ...




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBmsIyZy9XxAfXNQ3V0yQTEUDadiXq3Gjs",
  authDomain: "ucb-bootcamp-01.firebaseapp.com",
  databaseURL: "https://ucb-bootcamp-01.firebaseio.com",
  projectId: "ucb-bootcamp-01",
  storageBucket: "",
  messagingSenderId: "359458899422",
  appId: "1:359458899422:web:2673dd68f281aeb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var database = firebase.database();
// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    let snapshotprice = snapshot.child('highPrice');
    let snapshotbidder = snapshot.child('highbidder');


    // Change the HTML to reflect the stored values
    $('#highest-bidder').text(snapshotbidder);
    $("#highest-price").text(snapshotprice);

    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $('#highest-bidder').text(initialBidder);
    $("#highest-price").text(initialBid);

    // Print the data to the console.


  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  let currentbidder = $("#bidder-name").val();
  let currentbid = $('#bidder-price').val();
  console.log(currentbid, currentbidder);

  // Log the Bidder and Price (Even if not the highest)
  if (currentbid > highPrice) {
    highPrice = currentbid;
    highBidder = currentbidder;
    console.log(currentbidder);
    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      clickCount: highPrice,
      xxx: toString(highBidder)
      //highestbidder: highBidder
    });

    $('#highest-bidder').text(highBidder);
    $("#highest-price").text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
