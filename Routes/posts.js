const express = require('express');
const rotuer = express.Router()
const Post = require('../model/Post')

// Get all the post

rotuer.get("/", async(req, res) => {
   // Find() =? Get all data
   try {
      const posts = await Post.find();
      res.json(posts)
   } catch (err) {
      res.json(
         {message: err}
      )
   }
});

// Create and Save a post 

rotuer.post('/', async(req, res) => {
   const post = new Post({
      title: req.body.title,
      description: req.body.description,
   });

try {
   const savedPost = await post.save();
   res.json(savedPost)
} catch (err) {
   res.json({ message: err })
}
})


// Get A specific post by id

rotuer.get('/:postId', async(req, res) => {
   try {
      const post = await Post.findById(req.params.postId);
      res.json(post)
   } catch (err) {
      res.json({message: err})
   }
})


// Update a specific post by Id

rotuer.patch('/:postId', async (req, res) => {
   try {
      const updatePost = await Post.updateOne(
         {_id: req.params.postId},
         {$set: {
            title: req.body.title,
      description: req.body.description,
         }}
      )
      res.json(updatePost)
   } catch (err) {
      res.json({message: err})
   }
})

// Delete() => Delete a post by Id

rotuer.delete("/:postId", async (req, res) => {
   try {
   const removePost = await Post.deleteOne({ _id: req.params.postId });
      res.json(removePost);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = rotuer