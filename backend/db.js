// here 
require("dotenv").config()
// we are connection the mongodb database with mongoose by using dotenv
const mongoose=require("mongoose")
const connection=mongoose.connect(process.env.MONGO_URL)
module.exports={
    connection
}
