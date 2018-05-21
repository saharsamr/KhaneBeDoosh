var Users = require('./../../models/users');
var Estates = require('./../../models/estates');
var hasPaidFor = require('./../../models/paidForHousesRelation');
const fetch = require('node-fetch');

functions = {
    getBalance: async function(req, res) {
        let userData;
        await Users.findOne({
            where: {
                username: "behnamm"
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
                uid: '0',
                eid: estateID
            }
        }).then(async function (data) {
            if(data != null){
                result.paid = true;
                let response = await fetch('http://139.59.151.5:6664/khaneBeDoosh/v2/house/'+estateID);
                let jsonRes = await response.json();
                let estateData = await jsonRes.data;
                result.phone = estateData.phone;
            }
        });
        res.json(result);
    },

    buyHouseID: async function(req, res) {
        var estateID = req.body.id;
        var result = {
            paid: false,
            message: 'success'
        };
        var paidInstance = await hasPaidFor.findOne({
            where: {
                eid: estateID,
                uid: '0'
            }
        });
        console.log(JSON.stringify(paidInstance));
        if(!paidInstance){
            var user = await Users.findOne({where: {username: 'behnamm'}});
            user = user.toJSON();
            if(user.balance >= 1000){
                await Users.update({balance: user.balance-1000}, {where: {id: '0'}});
                result.paid = true;
                await hasPaidFor.create({uid: '0', eid: estateID})
                    .then(function(data){
                        console.log(JSON.stringify(data));
                    });
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