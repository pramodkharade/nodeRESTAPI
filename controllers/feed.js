exports.getPosts= (req,res,next)=>{
    res.status(200).json({'posts':[{ 
        'title':'NodeJs',
        'content':"It is light weight technology for REST API"
       }]});
};
exports.createPost = (req,res,next)=>{
    const title = req.body.title;
    const content = req.body.content;
    /****Create db connection****/
    res.status(201).json({
        message:"Post is created successfully.",
        post:{
            id: new Date().toISOString(),
            title:title,
            content:content
        }
    })
};