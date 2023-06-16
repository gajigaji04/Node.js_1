const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// GET /posts/:_postId
router.get("/posts/:_postId", async (req, res) => {
  try {
    const postId = ObjectId(req.params._postId); // Convert :_postId to ObjectId
    // TODO: Retrieve post from the database using the postId
    // const post = await Post.findById(postId);

    // Return the post as the response
    // res.json(post);
    res.send(`Retrieving post with _postId: ${postId}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
