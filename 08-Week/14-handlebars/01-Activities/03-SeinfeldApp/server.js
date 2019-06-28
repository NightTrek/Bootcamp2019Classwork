// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const mysql = require("mysql2/promise");

// Sets up the Express App
// =============================================================
var app = express();

// so it will work in heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var StartConnection = async function(reservationName, phoneNumber, callback) {
    const connection = await mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "password",
        database: "restaurant_db"
    });

    return callback(connection, reservationName, phoneNumber);
}

const query = async function(con, tableName) {
    try {
        return con.query(`SELECT * FROM tables`);

    } catch (err) {
        throw err;
    }
}

const postToSql = async function(con, name, phoneNumber) {
    console.log(name);
    console.log(phoneNumber);
    try {
        const response = await con.query("INSERT INTO tables (reservationName, phoneNumber) VALUES (?, ?);", [name, phoneNumber]);
        // posts in to sql
        // console.log(response[0])
    } catch (err) {
        throw err;
    }
}



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/cast", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/coolness-chart", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


// Displays a single reservation, or returns false
app.get("/attitude-chart/:att", function(req, res) {
    var chosen = req.params.name;

    // console.log(chosen);

    for (var i = 0; i < Reservations.length; i++) {
        if (chosen === Reservations[i].routeName) {
            return res.json(Reservations[i]);
        }
    }

    return res.json(false);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});