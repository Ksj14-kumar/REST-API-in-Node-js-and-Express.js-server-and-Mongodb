const express = require('express');
require("dotenv/config")
const bodyParser= require("body-parser")
const app = express()
const port= process.env.PORT ||1500
app.use(bodyParser.json())

const router= require("./routes/routes")
const mongoose= require("mongoose")
const mongoConnect= process.env.URL

app.use("/",router)








mongoose.connect(mongoConnect,(err)=>{
    if(err) {
        throw err
    }
    else{
        console.log("connect to mongodb")
    }
})


app.listen(port, (err)=>{
    console.log(`the server start at port ${port}`)
})

