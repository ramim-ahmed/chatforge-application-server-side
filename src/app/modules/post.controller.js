const httpStatus = require("http-status");
const { postService } = require("./post.service");

const createPost = async (req, res) => {
  try {
    const data = req.body;
    const result = await postService.createPost(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "new post added successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "new post added failed!!",
      error,
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const result = await postService.getAllPosts();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All Posts successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch Post failed!!",
      error,
    });
  }
};

const udpatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await postService.updatePost(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Post updated successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Post updated failed!!",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.deletePost(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Post is Deleted successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Post is deleted failed!!",
      error,
    });
  }
};

module.exports.postController = {
  createPost,
  getAllPosts,
  deletePost,
  udpatePost,
};
