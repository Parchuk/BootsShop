const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "passport123", {
    dialect: "mysql",
    host: "172.17.0.3",
    port: 33060
});
module.exports = sequalize;