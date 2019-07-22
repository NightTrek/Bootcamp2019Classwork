/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/
$(document).on("click", "#weight-sort", async function(){
console.log("click1");
let response = await $.ajax({
  method: "POST",
  url: "http://localhost:3000/name",
  data: data

});


});



$(document).on("click", "#name-sort", async function(){
console.log("click2");


});

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  $("#results").empty();
  data.forEach(element => {
    let row =$("<tr>");
  row.append($("<td>").text(element.name)).append($("<td>").text(element.numberOfLegs)).append($("<td>").text(element.class)).append($("<td>").text(element.weight)).append($("<td>").text(element.whatIwouldReallyCallIt));
  $("#results").append(row);
  });
}

$.getJSON("/all", function(data) {
  console.log(data)
  displayResults(data);
});
