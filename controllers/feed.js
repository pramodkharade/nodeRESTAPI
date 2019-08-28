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
    const title = req.body.title;
    const content = req.body.content;
    /****Create db connection****/
    res.status(201).json({
        message:"Post is created successfully.",
        post:{
            _id: new Date().toISOString(),
            title:title,
            content:content,
            creator:{
                name:'Pramod Kharade'
            },
            createdAt: new Date()
        }
    })
};