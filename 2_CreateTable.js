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

//Create Item Table Structure
var Item = sequelize.define('Item', {
    id: Sequelize.STRING,
    name:Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.DATE
});

//Applying Item Table to database
sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });

  var item1 = Item.build({
    id: 1,
    name:'Laptop',
    description: 'Acer 2340TL',
    qty: 23
});
//Inserting Data into database
item1.save().complete(function (err) {
    if (err) {
        console.log('Error in Inserting Record');
    } else {
        console.log('Data successfully inserted');
    }
});

//Other way: Immediate insertion of data into database
sequelize.sync().success(function () {
    Item.create({
        id: 2,
        name:'Cell Phone',
        description: 'Sony',
        qty: 20
    }).success(function (data) {
        console.log(data.values)
    })
});