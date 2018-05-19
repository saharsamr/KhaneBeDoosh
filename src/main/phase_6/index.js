// var express = require('express');
// var app = express();
//
// app.get("/", function (req, res) {
//     res.send("Hello world!");
// });
//
// var ex = app.listen(3000);
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('../data/KhaneBeDoosh.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the KBD SQlite database.');
});

db.serialize(() => {
    db.each(`SELECT *
           FROM  users`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row + "\t");
    });
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});