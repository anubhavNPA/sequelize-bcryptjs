//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var connection = new Sequelize('moneytor_db', 'moneytor1', '1234moneytor', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
connection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    connection.close();
    console.log('connection closed');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
});