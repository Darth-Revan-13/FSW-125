//server.js

const express = require("express");
const app = express();
const uuid = require("uuid/v4")

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000.")
})