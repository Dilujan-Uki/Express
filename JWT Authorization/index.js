import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import authRouter from "./routes/auth.js";


const app = express();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL

app.use(express.json());
app.use(bodyParser.json());
app.use("/",async(req,res)=>{
    res.status("Hello It's Working")
})


mongoose.connect(MONGOURL).then(() => {
    console.log("Database Connected Successfull");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch((error) => {
    console.log(`Database connection failed ${error}`);
});
