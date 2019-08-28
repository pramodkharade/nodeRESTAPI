const {validationResult} = require('express-validator');
const Post = require('../models/post');
exports.getPosts= (req,res,next)=>{
    Post.find()
        .then(posts=>{
            if(!posts){
                const error = new Error('Could not found posts');
                error.statusCode = 404;
               throw error;
            }
            res.status(200).json({message:'Posts are found!',posts:posts});
        })
        .catch(error=>{
            if(!error.statusCode){
                error.statusCode = 500;
            }
            next(error);
        });
};
exports.createPost = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        const error = new Error('Validation failed, entered data is incorrect');
         error.statusCode = 422;
        throw error;
    }
    if(!req.file){
        const error = new Error('image file is not provided');
         error.statusCode = 422;
        throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    const imageUrl = req.file.path.replace("\\" ,"/");
    /****Create db connection****/
    const post = new Post({
        title:title,
            content:content,
            imageUrl:imageUrl,
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
exports.getPost = (req,res,next)=>{
    const postId = req.params.postId;
    Post.findById(postId)
    .then(post=>{
        if(!post){
            const error = new Error('Could not found post');
            error.statusCode = 404;
           throw error;
        }
        res.status(200).json({message:'Post found',post:post});
    })
    .catch(error=>{
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
        });
};