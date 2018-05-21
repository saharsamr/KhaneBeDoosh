var Users = require('./../../models/users');
var Estates = require('./../../models/estates');
var hasPaidFor = require('./../../models/paidForHousesRelation');
var EstatesHandler = require('./../EstatesListHandler/EstatesData');

functions = {
    getBalance: async function(req, res) {
        let userData;
        let paymentStatus;
        await Users.findOne({
            where: {
                username: "behnam"
            }
        }).then(function (data) {
            userData = data;
        });
        res.json(userData);
    },
    
    checkIfPaid: async function(req, res) {
        let estateID = req.query.id;
        let result = {
            paid: false,
            phone: ''
        };
        await hasPaidFor.findOne({
            where: {
                uid: '1',
                eid: estateID
            }
        }).then(function (data) {
            if(data){
                result.paid = true;
                result.phone = EstatesHandler.getPhone(estateID);
            }
        });
        res.json(result);
    },

    buyHouseID: async function(req, res) {
        console.log("salam");
        var estateID = req.body.id;
        console.log(estateID);
        var result = {
            paid: false,
            message: 'success'
        };
        var paidInstance = await hasPaidFor.findOne({
            where: {
                eid: estateID,
                uid: '1'
            }
        });
        console.log(JSON.stringify(user));
        if(!paidInstance){
            var user = await Users.findOne({where: {username: 'behnam'}});
            console.log("!user");
            user = user.toJSON();
            if(user.balance >= 1000){
                await Users.update({id: user.balance-1000}, {where: {id: '1'}});
                result.paid = true;
                res.status(200).json(result);
            }
            else{
                result.message = "Lack of balance.";
                res.status(400).json(result);
            }
        }
    }
};

module.exports = functions;