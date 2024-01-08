const express = require('express');
const app = express();
require("dotenv").config()

// const { connection } = require('./db');
const {connection}=require("./db.js")
app.use(express.json())


app.use(express.json())
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);



app.listen(process.env.PORT,async()=>{
    await connection
    console.log("database is conencted")
    console.log(`port ${process.env.PORT} running at the server`)
})


