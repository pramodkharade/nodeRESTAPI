const express = require('express');
const feedRouter = require('./routes/feed');
const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.urlencoded())// x-www-form-url
app.use(bodyParser.json()); // application/json
app.use('/feed',feedRouter);
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Request-Headers','Content-Type,Authorization');
});
app.listen(8080);