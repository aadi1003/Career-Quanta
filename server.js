import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dbCoonnection from "./database/db.js";


const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use("/",router)



const PORT=process.env.port || 8000

dbCoonnection();

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))