const express=require('express')
require('dotenv').config()

const app=express()

const port=4060;

const githubData={
    "name":"Govind Mall",
    "Roll no":"2001330100115",
    "College":"NIET"
}

app.get('/Anuj',(req,res)=>{
    res.send("You are on Home page");
})

app.get('/twitter',(req,res)=>{
    res.send("Govind Mall on Twitter")
})

app.get('/userData',(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${port}`)
});


