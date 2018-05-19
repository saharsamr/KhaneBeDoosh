var Sequelize = require('sequelize');
var sequelize = require('./DBConnection');

var Users = sequelize.define('users', {
    id: {type: Sequelize.STRING, primaryKey: true},
    username: {type: Sequelize.STRING, unique: true},
    password: {type: Sequelize.STRING},
    balance: {type: Sequelize.DOUBLE},
    name: {type: Sequelize.STRING},
    is_admin: {type: Sequelize.INTEGER, validate: {isIn: [[0, 1]]}}
});

module.exports = Users;

