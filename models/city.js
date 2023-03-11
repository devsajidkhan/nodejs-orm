const { db } = require('../database')
const sequelize = require('sequelize');

const City = db.define('city', {
    Name: sequelize.STRING,
    CountryCode: sequelize.STRING,
    District: sequelize.STRING,
    Population: sequelize.STRING,
    }, {
    tableName: 'city'
});


module.exports.City = City;
