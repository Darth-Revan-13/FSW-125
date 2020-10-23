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
    res.send(`Current Bounties: \n ${bounties}`)
}).post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(`New bounty added. \n ${newBounty} \n Current Bounties: \n ${bounties}`)
}).delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Bounty removed. \n Current bounties: ${bounties}`)
}).put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(`Bounty updated/ \n ${updatedBounty} \n Current Bounties: \n ${bounties}`)
})

module.exports = bountyRouter