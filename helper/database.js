const Sequalize = require("sequelize");
const { password, username } = undefined || require('./configl.js');
const USERNAME = process.env.DB_ACCESS_KEY_ID || username;
const PASSWORD = process.env.DB_SECRET_ACCESS_KEY || password;

const sequalize = new Sequalize('bootshop', USERNAME, PASSWORD, {
    dialect: "mysql",
    host: '192.168.64.3',
});
module.exports = sequalize;


