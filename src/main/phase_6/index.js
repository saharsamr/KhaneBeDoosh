var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/search", require('./domain/search/getDataFromServer'));

app.listen(8080);
