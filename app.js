const express = require('express');
const feedRouter = require('./routes/feed');
const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.urlencoded())// x-www-form-url
app.use(bodyParser.json()); // application/json
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/feed',feedRouter);
app.listen(8080);