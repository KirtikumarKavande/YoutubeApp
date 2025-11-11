import express, { Application } from "express";

const app: Application = express();



app.use(express.json());


app.get('/health',(req,res)=>{
    res.json("working well go ahead>>")
})

export default app;
