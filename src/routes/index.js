const express = require("express");
const { postRoutes } = require("../app/modules/posts/post.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/posts",
    route: postRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
