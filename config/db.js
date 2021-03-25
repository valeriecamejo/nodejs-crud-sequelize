const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './config/crud.sqlite'
});

db.sync()
.then(() => console.log('Conectado a la DB!!'))
.catch(err => console.log(err.message));

module.exports = db
