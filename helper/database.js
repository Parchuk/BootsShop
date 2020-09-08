const Sequalize = require("sequelize");
// const { DATABASENAME, PASSWORD, USERNAME, HOSTNAME } = require('config.js');
// const sequalize = new Sequalize(DATABASENAME, USERNAME, PASSWORD, {
//     dialect: "mysql",
//     host: HOSTNAME,
// });

const sequalize = new Sequalize('intershop', 'parchuk', '12345678', {
    dialect: "mysql",
    host: '172.17.0.3',
});
module.exports = sequalize;

