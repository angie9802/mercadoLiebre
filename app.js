const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.use(express.static(path.resolve(__dirname,'./public')))

app.listen(port, ()=>{
    console.log("Running server in port "+port)
})
