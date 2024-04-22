const express = require("express");
const { postController } = require("./post.controller");

const router = express.Router();

router.post("/create-post", postController.createPost);

module.exports.postRoutes = router;
