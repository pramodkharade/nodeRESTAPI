const express = require('express');
const feedRouter = require('./routes/feed')
const app = express();
app.use('/feed',feedRouter);
app.listen(8080);