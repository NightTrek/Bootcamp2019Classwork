var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlist_db"
});
// each command needs to cal the next code is asyncrounous however this implementation is syncronous
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createSong("Bad Romance", "lady gaga", "pop");
  
  
});

function createSong(title, artist, genre) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: title,
      artist: artist,
      genre: genre
    },
    function(err, res) {
      if(err) throw err;
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong("electro pop","Bad Romance");
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateSong(genre,title) {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: genre
      },
      {
        title: title
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong("Bad Romance");
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong(title) {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      title: title
    },
    function(err, res) {
      if(err) throw err;
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
