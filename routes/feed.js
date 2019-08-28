const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const feedController = require('../controllers/feed');
router.get('/posts',feedController.getPosts);
router.post('/post',[
    body('title').trim().isLenght({min:5}).withMessage('Please enter valid title'),
    body('content').trim().isLenght({min:5}).withMessage('Please enter valid content')
],feedController.createPost);
module.exports = router;