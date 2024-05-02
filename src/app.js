const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./app/routes");

// backend application
const app = express();

// middlware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to convo app server!!",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found!!",
      },
    ],
  });
  next();
});

// global error handler
app.use((err, req, res) => {
  res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
});

module.exports = app;
