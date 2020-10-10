const Sequalize = require("sequelize");
const USERNAME = process.env.DB_ACCESS_KEY_ID;
const PASSWORD = process.env.DB_SECRET_ACCESS_KEY;

const sequalize = new Sequalize('bootshop', USERNAME, PASSWORD, {
    dialect: "mysql",
    host: '51.116.182.16',
});
module.exports = sequalize;