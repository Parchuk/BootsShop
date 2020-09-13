const Sequalize = require("sequelize");
const { password, username } = require('./config.js') || undefined;
const USERNAME = process.env.DB_ACCESS_KEY_ID || username;
const PASSWORD = process.env.DB_SECRET_ACCESS_KEY || password;

const sequalize = new Sequalize('intershop', USERNAME, PASSWORD, {
    dialect: "mysql",
    host: '52.234.178.189',
});
module.exports = sequalize;


