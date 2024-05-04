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

const getMyPosts = async (req, res) => {
  try {
    const { email } = req.query;
    if (req?.user?.email !== email) {
      return res.status(httpStatus.FORBIDDEN).json({
        success: false,
        message: "Unauthorized aceess!!",
      });
    }
    const result = await postService.myPosts(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch All My Posts successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch My Post failed!!",
      error,
    });
  }
};

const addLike = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.addLike(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Post like is success!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Post like is failed!!",
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

const getAuthAccessToken = async (req, res) => {
  try {
    const user = req.body;
    const token = await postService.getAuthToken(user);
    res
      .status(httpStatus.OK)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
      })
      .json({
        success: true,
        message: "access token is successfully!!",
        access_token: token,
      });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "access token is failed!!",
      error,
    });
  }
};

module.exports.postController = {
  createPost,
  getAllPosts,
  getMyPosts,
  deletePost,
  udpatePost,
  addLike,
  getAuthAccessToken,
};
