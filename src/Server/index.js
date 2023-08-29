import express from "express";

const app= express();

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen("3000",()=>{
    console.log("server is up and running on porn 3000")
})