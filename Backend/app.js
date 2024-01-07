const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json());
app.use(cors())


app.use("/logs/downloads", require("./controller/log"));
app.use("/api/v1", require("./controller"));


module.exports = app