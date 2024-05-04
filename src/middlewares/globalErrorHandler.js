const httpStatus = require("http-status");

const globalErrorHanlder = (err, req, res) => {
  res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
};

module.exports = globalErrorHanlder;
