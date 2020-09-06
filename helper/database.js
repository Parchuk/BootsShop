const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root'@'172.17.0.2", "passport123", {
    dialect: "mysql",
    host: "172.17.0.3",
});
module.exports = sequalize;