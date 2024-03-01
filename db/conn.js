const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc2', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('(MYSQL) DATABASE CONNECTED SUCCESSFULLY WITH (SEQUELIZE)');
} catch (error) {
    console.log('UNABLE TO CONNECT TO DATABASE: ', error);
}

module.exports = sequelize