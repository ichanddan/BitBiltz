const express = require("express");
const router = express.Router();
const defaultPath = require("./DefultRoute");
const authRoute = require("./AuthRouter");

const defaultRoutes = [
  {
    path: '/',
    route: defaultPath
  },
  {
    path: '/auth',
    route: authRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
