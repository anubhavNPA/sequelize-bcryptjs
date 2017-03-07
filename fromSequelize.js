//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('test', 'anubhav', 'moneytor1234', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

  var User = sequelize.define('electronics', {
  //username:     Sequelize.STRING,
  //password:     Sequelize.STRING,
  id:           Sequelize.INTEGER,
  name:         Sequelize.STRING,
  description:  Sequelize.STRING,
  qty:          Sequelize.INTEGER
});

sequelize
  .sync({ force: true })
  .then(function() {
    return User.create({
      id:         2,
      name:       'cell phone',
      description:'SOny',
      qty:        20
    });
  }).then(function (err) { 
    console.log('An error occurred while creating the table:', err);
  });