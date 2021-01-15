//starshipNameRouter.js

const express = require('express')
const starshipNameRouter = express.Router()
const uuid = require("uuid")

const starshipNames = [
    { starshipName: "Imperial I-class Star Destroyer", cost: 150000000, inProduction: true, _id: uuid.v4() },
    { starshipName: "Imperial II-class Star Destroyer", cost: 150000000000, inProduction: true, _id: uuid.v4() },
    { starshipName: "Executor", cost: 325000000000, inProduction: false, _id: uuid.v4() },
    { starshipName: "Eclipse-class dreadnought", cost: 172000000000, inProduction: false, _id: uuid.v4() },
    { starshipName: "Sovereign-class Super Star Destroyer", cost: 172000000000, inProduction: false, _id: uuid.v4() },
    { starshipName: "Pellaeon-class Star Destroyer", cost: 172000000000, inProduction: false, _id: uuid.v4() },
    { starshipName: "Harrower-class dreadnought", cost: 90000000, inProduction: false, _id: uuid.v4() },
    { starshipName: "Venator-class Star Destroyer", cost: 59000000, inProduction: false, _id: uuid.v4() },
]

starshipNameRouter.route("/").get((req, res)=>{
    res.send({msg:`Current starship Names:`, value:starshipNames})
}).post((req, res) => {
    const newStarship = req.body
    newStarship._id = uuid.v4()
    newStarship.inProduction = true
    starshipNames.push(newStarship)
    res.send({NewStarshipAdded : newStarship, currentStarshipNames : starshipNames})
})
}).delete((req, res) => {
    const starshipId = req.params.starshipId
    const starshipIndex = starships.findIndex(starships => starships._id === starshipsId)
    starships.splice(starshipIndex, 1)
    res.send(`Starship removed. \n Current starships: ${starships}`)
starshipNameRouter.route("/:starshipId").delete((req, res) => {
    const starshipId = req.params.starshipId
    const starshipIndex = starshipNames.findIndex(starship => starship._id === starshipId)
    starshipNames.splice(starshipIndex, 1)
    res.send({msg : "Starship removed", currentStarshipNames : starshipNames})
}).put((req, res) => {
    const starshipId = req.params.starshipId
    const starshipIndex = starshipNames.findIndex(starship => starship._id === starshipId)
    const updatedStarship = Object.assign(starshipNames[starshipIndex], req.body)
    res.send({updatedStarship : updatedStarship, currentStarshipNames : starshipNames})
})

module.exports = starshipNameRouter