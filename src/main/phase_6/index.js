var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get("/", function (req, res) {
    res.send("Hello world!");
});

// app.use("/search", require('./domain/EstatesListHandler/StoreEstatesInDB'));
app.get("/search", require('./domain/Search/GenerateSearchResult'));

app.get("/getCredit", require('./domain/UserHandler/UsersData').getBalance);

app.get("/estatephonenumber", require('./domain/UserHandler/UsersData').checkIfPaid);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.put("/estatephonenumber", require('./domain/UserHandler/UsersData').buyHouseID);

app.put("/estatedetail", require('./domain/EstatesListHandler/EstateDetail'));

app.listen(8080);
