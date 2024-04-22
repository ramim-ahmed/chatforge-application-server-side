const Post = require("./post.model");

const createPost = async (data) => {
  const result = await Post.create(data);
  return result;
};

const getAllPosts = async () => {
  const result = await Post.find();
  return result;
};

const deletePost = async (id) => {
  const result = await Post.deleteOne({ _id: id });
  return result;
};

module.exports.postService = {
  createPost,
  getAllPosts,
  deletePost,
};
