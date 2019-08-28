const express = require('express');
const feedRouter = require('./routes/feed');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');   
const path = require('path');
const app = express();
const MONGOURI ='mongodb://127.0.0.1:27017/blogNodeAPI';
const port = process.env.PORT || 8080;
//app.use(bodyParser.urlencoded())// x-www-form-url
app.use(bodyParser.json()); // application/json
app.use('/images',express.static(path.join(__dirname,'images')));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/feed',feedRouter);
app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message});
});
mongoose.connect(MONGOURI, { useNewUrlParser: true })
    .then((result) => {
        app.listen(port, () => {
            console.log('Server is running on mongoose ', port);
        });
    })
    .catch(error => {
        console.log('connection error is: ', error);
    });
