const express = require('express');
const bp      = require('body-parser')
const signup  = require('./controlers/signup')
const login   = require('./controlers/login') 
const app     = express();

//Middlewares
app.use(bp.json())


//Rouders

app.use(signup)
app.use(login)

const _prot = process.env.PORT || 4000;

app.listen(_prot,()=>{
    console.log(`Appliction listen on Prot ${_prot}`)
})
