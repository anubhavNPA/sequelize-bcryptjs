//Including dependency
var Sequelize = require("sequelize");
var encrypt = require('bcryptjs');

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

//create model

var User = connection.define('moneytor_admin', {
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

var getUserName = function () {
  User.findOne({ where: {moneytor_user: 'moneytor3'} })
  .then((user) => {
    //console.log(user.get('moneytor_user')+' '+ user.get('moneytor_password'));
    //console.log(user);
    
    return user.get('moneytor_password');
  })
  .catch((err)=> {
    console.log(err)
  });
}

// build, save and access the object with chaining:
/*
User
  .build({ moneytor_user: 'moneytor2', moneytor_password: '5678moneytor' })
  .save()
  .then(() => {
    // you can now access the currently saved task with the variable anotherTask... nice!
  }).catch(function(error) {
    console.log('error in creating 2nd user');
  });
*/
var somePassword = 'somePassword';
/*
var createPassword = function (string) {
    console.log('starting bcrypt to create password');
    
    encrypt.genSalt(10, (err, salt) => {
        encrypt.hash(somePassword, salt, (err, hash) => {
            if(err) throw err;
            somePassword = hash;
            //now build user model in sequelize and write to MySQL
            User
                .build({ moneytor_user: 'moneytor3', moneytor_password: somePassword })
                .save()
                .then(() => {
                    // you can now access the currently saved task with the variable anotherTask... nice!
                }).catch(function(error) {
                    console.log('error in creating 3rd user');
                });
            })
        });
        
    console.log('created password for 3rd user and inserted in mmysql');

createPassword(somePassword);
*/

var updatePassword = function(string) {
  console.log('starting bcrypt to update password');
  //console.log(getUserName());
  encrypt.genSalt(10, (err, salt) => {
      encrypt.hash(somePassword, salt, (err, hash) => {
          if(err) throw err;
          somePassword = hash;
          //now build user model in sequelize and write to MySQL
          User.findOne({ where: {moneytor_user: 'moneytor3'} })
            .then((user) => {
              //console.log(user.get('moneytor_user')+' '+ user.get('moneytor_password'));
              //console.log(user);
              user.update({ moneytor_user: 'moneytor3', moneytor_password: somePassword}, {fields: ['moneytor_password']}).then(function() {
              // title will now be 'foooo' but description is the very same as before
              })
              console.log('updated password is : ' + user.get('moneytor_password'));
            })
            .catch((err)=> {
              console.log(err)
            });
          })
      });
}

updatePassword('somePassword');
/*
bcryptJS.genSalt(saltRounds, (err, salt) => {
          bcryptJS.hash(newPassword1, salt, (err, hash) => {
            models.User.update ({
                password: hash
              }, 
              {
                where: {
                  emailId: emailId
                }
              }
            )
          },
          err => {
            throw(err);
          },
          () => {// Updated User
              res.status(200).json({
                resultShort: 'success',
                resultLong: 'Password changed successfully. You can now login to your account with the new password'
              });
              models.PasswordReset.destroy({
                where: {
                  resetToken: resetToken
                }
            });
          }
          );
        });
        */