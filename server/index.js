import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.DB_URL)
  .then(()=>{
    console.log("database connected !!!!");
    app.listen(process.env.PORT,()=>{
    console.log('server running at PORT:'+ process.env.PORT)
});
}).catch(()=>{
    console.log("database connection error !!!!!");
});