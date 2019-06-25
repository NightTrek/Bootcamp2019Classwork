// const mysql = require("mysql")
const mysql = require("mysql2/promise");
// const E = require('enquirer')


var StartConnection = async function(){
    const connection = await mysql.createConnection({
        host: "localhost",
      
        // Your port; if not 3306
        port: 3306,
      
        // Your username
        user: "root",
      
        // Your password
        password: "password",
        database: "top_songs_db"
      });

      
    //   queryByArtist(connection,"The Beatles");
    //   queryByDuplicateArtist(connection);
    // queryByIDRange(connection,10,21)
    // queryBySongName(connection, "Every Breath You Take")
}

StartConnection();


const query = async function(con, artistName){
    try{
    const response = await con.query(`SELECT * FROM songs WHERE artist = "${artistName}"`);
    // console.log(response[0])
    for(key in response[0]){
        let data = response[0][key]
        console.log("-----------------------------------------------")
        console.log(data.artist)
        console.log(data.songName)
        console.log(data.releaseYear)
        console.log(`USA:${data.USA}`)
        console.log(`UK:${data.UK}`)
        console.log(`EU:${data.EU}`)
        console.log(`South America:${data.SouthAmerica}`)
        console.log(`world :${data.world}`)
        console.log("-----------------------------------------------")
    }
}
catch(err){
    throw err;
}
}


const queryByArtist = async function(con, artistName){
    try{
    const response = await con.query(`SELECT * FROM songs WHERE artist = "${artistName}"`);
    // console.log(response[0])
    for(key in response[0]){
        let data = response[0][key]
        console.log("-----------------------------------------------")
        console.log(data.artist)
        console.log(data.songName)
        console.log(data.releaseYear)
        console.log(`USA:${data.USA}`)
        console.log(`UK:${data.UK}`)
        console.log(`EU:${data.EU}`)
        console.log(`South America:${data.SouthAmerica}`)
        console.log(`world :${data.world}`)
        console.log("-----------------------------------------------")
    }
}
catch(err){
    throw err;
}
}


const queryByDuplicateArtist = async function(con){
    try{
    const response = await con.query(`SELECT artist, COUNT(*) c FROM songs GROUP BY artist HAVING c > 1`);
    // console.log(response[0])
    for(key in response[0]){
        let data = response[0][key]
        console.log("-----------------------------------------------")
       console.log(`artist: ${data.artist} count:${data.c}`)
        console.log("-----------------------------------------------")
    }
}
catch(err){
    throw err;
}
}

const queryByIDRange = async function(con,start=0,end=1000){
    try{
    //const query = `SELECT * FROM songs WHERE  id>${start} AND id<${end}`;
    const query = "SELECT * FROM songs WHERE  id > ? AND id < ?"
    const response = await con.query(query, [start, end]);
    // console.log(response[0])
    for(key in response[0]){
        let data = response[0][key]
        console.log("-----------------------------------------------")
       console.log(data)
    }
}
catch(err){
    throw err;
}
}

const queryBySongName = async function(con,song){
    try{
    const query = `SELECT * FROM songs WHERE songName = "${song}"`;
    const response = await con.query(query);
    // console.log(response[0])
    for(key in response[0]){
        let data = response[0][key]
        console.log("-----------------------------------------------")
       console.log(data)
       console.log("-----------------------------------------------")
    }
}
catch(err){
    throw err;
}
}





// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
  
// });

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
      
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes

//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
     
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
