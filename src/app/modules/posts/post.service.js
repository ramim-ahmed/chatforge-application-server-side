/* eslint-disable no-undef */
const createToken = require("../../../helpers/createToken");
const Post = require("./post.model");
const createPost = async (data) => {
  const result = await Post.create(data);
  return result;
};

const getAllPosts = async () => {
  const result = await Post.find({}).sort({ createdAt: "desc" });
  return result;
};

const myPosts = async (email) => {
  const result = await Post.find({ "user.email": email }).sort({
    createdAt: "desc",
  });
  return result;
};

const addLike = async (id) => {
  const result = await Post.updateOne({ _id: id }, { $inc: { likes: 1 } });
  return result;
};

const updatePost = async (id, data) => {
  const result = await Post.updateOne({ _id: id }, data);
  return result;
};

const deletePost = async (id) => {
  const result = await Post.deleteOne({ _id: id });
  return result;
};

const getAuthToken = async (user) => {
  const accessToken = createToken(
    user,
    process.env.JWT_ACCESS_TOKEN_SECRET,
    "1h"
  );
  return accessToken;
};

module.exports.postService = {
  createPost,
  getAllPosts,
  myPosts,
  deletePost,
  updatePost,
  addLike,
  getAuthToken,
};
