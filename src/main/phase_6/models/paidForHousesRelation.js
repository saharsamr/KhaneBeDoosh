var Sequelize = require('sequelize');
var sequelize = require('./DBConnection');
var Users = require('./users');
var Estates = require('./estates');

var hasPaidFor = sequelize.define('hasPaidFor', {
        uid: {type: Sequelize.STRING, refrences: {model: Users, Key: 'id'}},
        eid: {type: Sequelize.STRING, refrences: {model: Estates, Key: 'id'}}
    },
    {
        timestamps: false
    }
);

hasPaidFor.sync();

module.exports = hasPaidFor;

