const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "passport123", {
    dialect: "mariadb",
    host: "172.17.0.2",
});
module.exports = sequalize;