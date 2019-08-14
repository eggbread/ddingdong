const express = require('express');

var app = express();

app.post('/',()=>{
    console.log("Hello World")
})

app.listen(5000,()=>{
    console.log("Server Start")
})