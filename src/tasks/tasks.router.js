const router = require('express').Router()

//? const express = require('express')
//? const router = express.Router()

const taskServices = require('./tasks.services')


router.get('/todo', taskServices.getAllTodos)
router.post('/todo', taskServices.postTodo)

router.get('/todo/:id', taskServices.getTodoById)
router.patch('/todo/:id', taskServices.patchTask)

module.exports = router