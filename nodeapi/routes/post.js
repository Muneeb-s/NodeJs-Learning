const express = require("express");
const {getPosts, createPost, getPostsWithId} = require("../controllers/post")
const validator = require('../validator')


const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostsWithId)
router.post('/post', validator.createPostValidator, createPost)

module.exports = router;
