const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "passport123", {
    dialect: "mysql",
    host: "172.17.0.3",
    port: 3307
});
module.exports = sequalize;