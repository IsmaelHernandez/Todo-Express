const { DataTypes } = require('sequelize');

const db = require('../utils/database');

//* {
//*     id: 5,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING, //? es un varchar (tiene 255 de limitante)
        allowNull: false, //? Es un campo obligatorio
        unique: true
    },
    description: {
        type: DataTypes.TEXT,//? no tiene limite
        allowNull: false
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
}, {
    timestamps: false
})

module.exports = Tasks