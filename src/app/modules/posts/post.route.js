const express = require("express");
const { postController } = require("./post.controller");
const verifyAccessToken = require("../../../middlewares/verifyAccessToken");
const router = express.Router();
router.get("/", postController.getAllPosts);
router.get("/my-posts", verifyAccessToken, postController.getMyPosts);
router.post("/token", postController.getAuthAccessToken);
router.post("/create-post", postController.createPost);
router.patch("/add-like/:id", postController.addLike);
router.patch("/:id", postController.udpatePost);
router.delete("/:id", postController.deletePost);

module.exports.postRoutes = router;
