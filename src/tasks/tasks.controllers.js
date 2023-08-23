//? Se importa el modelo
const Tasks = require('../models/task.model')
//? TODO 
//* {
//*     id: 5,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

let id = 1

const findAllTodos = async() => {
    //? Esta funcion debe de traer todos los todo's de mi base de datos
    const data = await Tasks.findAll() //? select * from tasks;
    return data
}

const findTodoById = async (id) => {
    //? Esta funcion debe de retornar un todo dependiendo el id
    //? const todo = await Tasks.findByPk(id)
    const todo = await Tasks.findOne({
        where: {
            id: id
        }
    })
    return todo
}

const createTodo = async (obj) => {
    //? Esta funcion debe de crear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = await Tasks.create({
        title: obj.title,
        description: obj.description
    })
    return newTodo
}



const updateTodo = async (id, obj) => {
    const data = await Tasks.update(obj, {
        where: {
            id: id
        }
    })
    return data[0] //? Retorna un arreglo, este arreglo puede lucir de estas 2 maneras [1], [0]
}

const deleteTodo = async (id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return data //? Retorna 1 en caso de que se haya eliminado, o 0 en caso de que el id no exista
}

module.exports = {
    findAllTodos,
    findTodoById, 
    createTodo,
    updateTodo
}