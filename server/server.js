// 1. import all dependencies
const express = require("express")
const cors = require('cors')
const app = express()

// 2 configure express, cors, mongooose
require("./configs/mongoose.config")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true})) 


// 3. routes & logic
require("./routes/song.routes")(app)

// 4. listen to the port
app.listen(8000, ()=>console.log("Listening to the port 8000"))