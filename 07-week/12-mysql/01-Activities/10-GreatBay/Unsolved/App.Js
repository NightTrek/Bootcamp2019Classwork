const mysql = require("mysql2");
const E = require('enquirer')


var StartConnection = async function(){
    const connection = await mysql.createConnection({
        host: "localhost",
      
        // Your port; if not 3306
        port: 3306,
      
        // Your username
        user: "root",
      
        // Your password
        password: "password",
        database: "greatBay_db"
      });

      const response = await connection.query("SELECT * FROM products");
      console.log(response)

}

StartConnection();


var enquireInputHandler = async function () {

    let response = await E
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "What is your username(if you dont have one it will make a new one)",
                name: "username"
            },
            // Here we create a basic password-protected text prompt.
            {
                type: "list",
                message: "Post and Item Or Bid on an Item?",
                choices: ["Post an Item", "bid On an Item"],
                name: "todo"
              }
        ])// end of await
    
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
