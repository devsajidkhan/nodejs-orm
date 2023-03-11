require('dotenv').config();
const sequelize = require('sequelize');

// -----------------------------------------------
// Fetch env variables

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
// -----------------------------------------------

const sqlConnectionUrl = `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const db = new sequelize(sqlConnectionUrl, {
  dialect: 'mysql'
});

//get record
const getRecordFromDatabase = async (tablename, methodName, methodObj) => {
  try {
    let result = await tablename[methodName](methodObj);
    return result;
  } catch (err) {
    console.log('Query failed', err);
    return err;
  }
};

module.exports = {db, getRecordFromDatabase} ;