var Sequelize = require('sequelize');

var sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: '../../data/KhaneBeDoosh.db'
});

module.exports = sequelize;