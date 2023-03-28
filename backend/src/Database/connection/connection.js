const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASEKEY).
then(()=>{
    console.log("DATABASE CREATED")
}).catch((err)=>{
    console.log(err)
})
