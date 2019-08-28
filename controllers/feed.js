const {validationResult} = require('express-validator');
const Post = require('../models/post');
exports.getPosts= (req,res,next)=>{
    res.status(200).json({'posts':[{ 
        _id:'1',
        title:'NodeJs',
        content:"It is light weight technology for REST API",
        imageUrl:'images/duck.png',
        creator:{
            name:"Pramod Kharade"
        },
        createdAt: new Date()
       }]});
};
exports.createPost = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        const error = new Error('Validation failed, entered data is incorrect');
         error.statusCode = 422;
        throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    /****Create db connection****/
    const post = new Post({
        title:title,
            content:content,
            imageUrl:'images/duck.png',
            creator:{
                name:'Pramod Kharade'
            }
    });
    post.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message:"Post is created successfully.",
            post:result
        })
    })
    .catch(error=>{
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
        console.log(error);
    });
   
};