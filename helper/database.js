const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "passport123", {
    dialect: "mariadb",
    host: "localhost",
});
module.exports = sequalize;