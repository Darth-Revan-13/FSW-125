//bountyRouter.js

const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

const bounties = [
    { firstName: "Darth", lastName: "Vader", living: true, type: "Sith", _id: uuid.v4() },
    { firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", _id: uuid.v4() },
    { firstName: "Obi-Wan", lastName: "Kenobi", living: false, type: "Jedi", _id: uuid.v4() },
    { firstName: "Sheeve", lastName: "Palpatine", living: false, type: "Sith", _id: uuid.v4() },
    { firstName: "Princess", lastName: "Leia", living: true, type: "Jedi", _id: uuid.v4() },
]

// bountyRouter.get("/", (req, res) => {
//     res.send(bounty)
// })

bountyRouter.route("/").get((req, res)=>{
    res.send(bounties)
}).post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(`New bounty added. ${newBounty}`)
})

module.exports = bountyRouter