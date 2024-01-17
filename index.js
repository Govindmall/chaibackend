const express=require('express')
require('dotenv').config()

const app=express()

const port=4060;

app.get('/Anuj',(req,res)=>{
    res.send("You are on Home page");
})

app.get('/twitter',(req,res)=>{
    res.send("Govind Mall on Twitter")
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${port}`)
});


