const Sequalize = require("sequelize");
// const { DATABASENAME, PASSWORD, USERNAME, HOSTNAME } = require('config.js');
// const sequalize = new Sequalize(DATABASENAME, USERNAME, PASSWORD, {
//     dialect: "mysql",
//     host: HOSTNAME,
// });

const sequalize = new Sequalize('intershop', DB_ACCESS_KEY_ID, DB_SECRET_ACCESS_KEY, {
    dialect: "mysql",
    host: '172.17.0.2',
});
module.exports = sequalize;


