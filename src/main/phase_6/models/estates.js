var sequelize = require('./DBConnection');
var Sequelize = require('sequelize');
var Users = require('./users');

var Estates = sequelize.define('estates', {
    id: {type: Sequelize.STRING, primaryKey: true},
    buildingType: {type: Sequelize.INTEGER, validate: {isIn: [[0, 1]]}},
    dealType: {type: Sequelize.INTEGER, validate: {isIn: [[0, 1]]}},
    area: {type: Sequelize.INTEGER},
    imageURL: {type: Sequelize.STRING},
    sellPrice: {type: Sequelize.INTEGER},
    basePrice: {type: Sequelize.INTEGER},
    rentPrice: {type: Sequelize.INTEGER},
    address: {type: Sequelize.STRING},
    phone: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    type: {type: Sequelize.INTEGER},
    owner_id: {type: Sequelize.STRING, refrences: {model: Users, Key: 'id'}}
},
{
    timestamps: false
}
);

Estates.sync();

module.exports = Estates;

