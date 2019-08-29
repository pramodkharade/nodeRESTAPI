const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/auth');
const User = require('../models/user');
router.put('/signup',
    [
        body('email').isEmail().withMessage('Please enter valid email').custom((value,{req})=>{
            return User.findOne({email:value}).then(userDoc=>{
                if(userDoc){
                    return Promise.reject('E-mail address already exists');
                }
            })
        }).normalizeEmail(),
        body('password').trim().isLength({min:5}),
        body('name').trim().not().isEmpty()
    ],
    userController.singup);
module.exports = router;