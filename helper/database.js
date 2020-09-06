const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "passport123", {
    dialect: "mysql",
    host: "3306",
});
module.exports = sequalize;