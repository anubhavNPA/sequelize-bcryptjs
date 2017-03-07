//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var connection = new Sequelize('moneytor_db', 'moneytor1', '1234moneytor', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false //takes care of sequelize Not adding 'createdAt and updatedAt' by default in the model 
    }
});

//Checking connection status
connection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    //connection.close();
    //console.log('connection closed');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
});

//Create representative Table Structure
/*
var customer = connection.define('customer', {
    customer_id:             {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name:     Sequelize.STRING,
    middle_name:    Sequelize.STRING,
    last_name:      Sequelize.STRING,
    birth_date:     Sequelize.DATE,
    gender:         Sequelize.CHAR,
    marital_status: Sequelize.CHAR,
    nationality:    Sequelize.CHAR,
    religion:       Sequelize.CHAR,
    status:         Sequelize.CHAR,
    created_on:     Sequelize.DATE,
    remarks:        Sequelize.STRING
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);
*/
var user = connection.define('moneytor_admin', {
    user_id:             {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    moneytor_user:        Sequelize.STRING,
    moneytor_password:    Sequelize.STRING,
    
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);
/*
customer.findOne()
  .then((user) => {
    console.log(user.get('first_name')+' '+ user.get('last_name'));
    //console.log(user);
  })
  .catch((err)=> {
    console.log(err)
  })
  ;
  */

/*
customer.findAll({})
  .then((myDefaulters) => myDefaulters.forEach((user) => {
    console.log(user.get('first_name')+' '+ user.get('last_name')+ ' '+
       'marital status: '+ user.get('marital_status')+
        'birth_date : '+ user.get('birth_date'));
  }))
  .catch((err) => console.log(err))
  ;
*/
user.findAll({})
  .then((myusers) => myusers.forEach((user) => {
    console.log(user.get('moneytor_user')+' '+ user.get('moneytor_password')+ '\n');
  }))
  .catch((err) => console.log(err))
  ;


//*************************************example**************************************/
/*
var customer = connection.define('customer', {
  customer_id:             {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  amount: Sequelize.FLOAT
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


customer.findOne()
  .then((user) => {
    console.log(user.get('firstName')+' '+ user.get('lastName') + 'owes: '+ user.get('amount'));
    //console.log(user);
  })
  .catch((err)=> {
    console.log(err)
  })
  ;

customer.findAll({})
  .then((myDefaulters) => myDefaulters.forEach((user) => {
    console.log(user.get('firstName')+' '+ user.get('lastName'));
  }))
  .catch((err) => console.log(err))
;

var showDefaulters = function(myDefaulters) {
  myDefaulters.forEach((user) => {
    console.log(user.get('firstName')+' '+ user.get('lastName'));
  });
};
*/
//*****************************Another example*********************/
/*
var Defaulter = connection.define('defaulter', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});



Defaulter.findOne()
  .then((user) => {
    console.log(user.get('firstName')+' '+ user.get('lastName'));
    //console.log(user);
  })
  .catch((err)=> {
    console.log(err)
  })
  ;

Defaulter.findAll({})
  .then((myDefaulters) => showDefaulters(myDefaulters))
  .catch((err) => console.log(err))
;

var showDefaulters = function(myDefaulters) {
  myDefaulters.forEach((user) => {
    console.log(user.get('firstName')+' '+ user.get('lastName'));
  });
};
*/