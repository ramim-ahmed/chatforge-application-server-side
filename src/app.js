const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./routes");
const handleNotFoundApi = require("./middlewares/notFoundApi");
const globalErrorHanlder = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
// backend application
const app = express();
// middlware
app.use(
  cors({
    origin: ["https://convo-app-one.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to convo app server!!",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use(handleNotFoundApi);

// global error handler
app.use(globalErrorHanlder);

module.exports = app;
