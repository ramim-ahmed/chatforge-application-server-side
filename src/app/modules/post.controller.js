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
      success: true,
      message: "new post added failed!!",
      error,
    });
  }
};

module.exports.postController = {
  createPost,
};
