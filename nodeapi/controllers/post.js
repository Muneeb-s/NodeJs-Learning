const { default: mongoose } = require('mongoose')
const Post = require('../models/post')


exports.getPosts = (req, res)=>{
    const posts = Post.find().select("_id title body") // space separated props to select
    .then(posts => {
        res.json({
            posts
        })
    })
    .catch(err => console.log(err));
}

exports.getPostsWithId = (req, res) => {
    const id = req.params.id;
    const singlePost = Post.findOne({_id : {$in: [id] }})
    .select("_id title body")
    .then(post => {
        // console.log();
        res.json(post);
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            error: 'Invalid post ID'
        })
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log("CREATING POST", req.body);

    // post.save((err, result)=>{
    //     if(err){
    //         return res.status(400)
    //         .json({
    //             error: err
    //         });
    //     }
    //     return res.status(200).json({
    //         post: result
    //     });
    // })
    post.save()
    .then(result => {
        res.json({
            post:result
        })
    })







}


