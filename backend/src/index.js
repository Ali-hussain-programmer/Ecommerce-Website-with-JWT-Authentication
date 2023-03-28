const express = require("express");
const app = express();
const dotenv=require("dotenv")
const userRoutes=require("./router/userRoutes")
const authRoutes=require("./router/auth")
const cors = require("cors");
const cookieParser = require('cookie-parser')

dotenv.config()
require("./Database/connection/connection")

const corsOption={
  origin: true, credentials: true, exposedHeaders: ["set-cookie"], 
}

app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())

app.use("/api/users",userRoutes )
app.use("/api/auth",authRoutes)



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running On ${process.env.PORT}`);
});
