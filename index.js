const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("app is working fine")
})

app.listen(port, ()=> console.log(`app running on port: ${port}`))