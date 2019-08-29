const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');
router.get('/posts', isAuth, feedController.getPosts);

router.post('/post', isAuth,
    [
        body('title').trim().isLength({ min: 5 }).withMessage('Please enter valid title'),
        body('content').trim().isLength({ min: 5 }).withMessage('Please enter valid content'),
    ],
    feedController.createPost
);
router.get('/post/:postId', isAuth, feedController.getPost);
router.put('/updatepost/:postId', isAuth, [
    body('title').trim().isLength({ min: 5 }).withMessage('Please enter valid title'),
    body('content').trim().isLength({ min: 5 }).withMessage('Please enter valid content'),
], feedController.updatePost);
router.delete('/post/:postId', isAuth, feedController.deletePost);
module.exports = router;