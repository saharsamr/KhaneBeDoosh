var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/search", require('./domain/Search/GenerateSearchResult'));

app.listen(8080);
