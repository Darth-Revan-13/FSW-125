//todoRouter.js

const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

const todos = [
    { name: "Palpatine", description: "Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.", imageUrl: "https://i.ytimg.com/vi/VsnJfPcaTP8/maxresdefault.jpg", completed: false, id: uuid.v4() },
    { name: "The Senate", description: "Palpatine", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/mas-amedda-3-retina_095162b0.jpeg?region=0%2C0%2C1200%2C511", completed: true, id: uuid.v4() }
]

todoRouter.route("/").get((req, res) => {
    res.send(`Todo List: \n ${todos}`)
}).post((req, res) =>{
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todos.push(newTodo)
    res.send(`New todo added. \n ${newTodo} \n Current todo list: \n ${todos}`)
}).delete((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send(`Todo removed. \n Current todo list: ${todos}`)
}).put((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`Todo updates. \n ${updatedTodo} \n Current todos: \n ${todos}`)
})

module.exports = todoRouter