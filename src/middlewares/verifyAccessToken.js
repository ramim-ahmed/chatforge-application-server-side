/* eslint-disable no-undef */
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const verifyAccessToken = (req, res, next) => {
  try {
    const { email } = req.query;
    const { access_token } = req.cookies;
    const decoded = jwt.verify(
      access_token,
      process.env.JWT_ACCESS_TOKEN_SECRET
    );
    const { email: userEmail } = decoded;
    if (email !== userEmail) {
      return res.status(httpStatus.FORBIDDEN).json({
        success: false,
        message: "Authentication Failed",
      });
    }
    next();
  } catch (error) {
    res.status(httpStatus.FORBIDDEN).json({
      success: false,
      message: "Authentication Failed",
      error,
    });
  }
};

module.exports = verifyAccessToken;
