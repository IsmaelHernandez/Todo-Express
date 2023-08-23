//? Dependencies
const express = require('express')

const db = require('./utils/database')
const taskRouter = require('./tasks/tasks.router')

//? Initial configs
const port = 9000
const app = express()
//? Habilitar recibir formato JSON
app.use(express.json())

db.authenticate()
    .then(() => console.log('Database Autenticada Correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada Correctamente'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK'
    })
})

app.use('/', taskRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})


