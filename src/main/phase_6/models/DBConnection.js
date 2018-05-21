var Sequelize = require('sequelize');

const path = require('path');
const dbPath = path.resolve(__dirname, './../data/KhaneBeDoosh.db');

var sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: dbPath
});

module.exports = sequelize;