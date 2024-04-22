const Post = require("./post.model");

const createPost = async (data) => {
  const result = await Post.create(data);
  return result;
};

module.exports.postService = {
  createPost,
};
