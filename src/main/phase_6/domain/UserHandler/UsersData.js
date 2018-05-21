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
                id: "1"
            }
        }).then(function (data) {
            userData = data;
        });
        res.json(userData);
    },
    
    checkIfPaid: async function(req, res) {
        let estateID = req.query.id;
        let result;
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
            else
                result.paid = false;
        });
        res.json(result);
    },

    buyHouseID: async function(req, res) {
        var estateID = req.body.id;
        var result;
        var user = await Users.findOne({where: {username: 'behnam'}});
        if(!user){
            user = user.toJSON();
            if(user.balance >= 1000){
                await Users.update({id: user.balance-1000}, {where: {id: '1'}});
                result.paid = true;
                res.status(200).json(result);
            }
            else{
                result.paid = false;
                result.message = "Lack of balance.";
                res.status(400).json(result);
            }
        }
    }
};

module.exports = functions;