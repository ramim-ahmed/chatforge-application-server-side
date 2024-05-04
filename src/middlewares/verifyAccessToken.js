/* eslint-disable no-undef */
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const verifyAccessToken = (req, res, next) => {
  const token = req.cookies?.access_token;
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorised access user!!!",
    });
  }

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
    // err
    if (err) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "Unauthorised access user!!!",
      });
    }
    //valid token
    req.user = decoded;
    next();
  });
};

module.exports = verifyAccessToken;
