var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

sequelize.sync();

var ex = app.listen(3000);
