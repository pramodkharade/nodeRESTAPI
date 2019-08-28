const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const feedController = require('../controllers/feed');
router.get('/posts',feedController.getPosts);

router.post('/post',[
    body('title').trim().isLength({min:5}).withMessage('Please enter valid title'),
    body('content').trim().isLength({min:5}).withMessage('Please enter valid content'),
],feedController.createPost);
router.get('/post/:postId',feedController.getPost);
module.exports = router;