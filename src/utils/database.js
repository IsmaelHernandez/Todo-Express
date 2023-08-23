//? Importamos sequelize
const { Sequelize } = require('sequelize')

//? crear una instancia de nuestro obj sequelize
const db = new Sequelize({
    dialect : `postgres`,
    host: 'localhost',
    database: 'new',
    username: 'postgres',
    password: 'root',
    port: 5432
})



module.exports = db