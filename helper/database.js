const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "parchuk", "12345678", {
    dialect: "mysql",
    host: "172.17.0.3",
});
module.exports = sequalize;