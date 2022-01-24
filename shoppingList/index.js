const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const db = require('./config/db')
const items = require('./api/routs/item')

const app = express();

// Middleware

app.use(bp.json())


app.use('/routes/item',items)




const _port = process.env.PORT || 5000;

app.listen(_port,()=>{
    console.log(`Application run listen port: ${_port}`)
});

