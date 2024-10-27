const express = require("express");
const router = express.Router();
const defaultPath = require("./DefultRoute");
const authRoute = require("./AuthRouter");
const { jwt } = require("../middleware");

router.use("/", defaultPath);
router.use("/auth", authRoute);
router.use(jwt.verifyToken);



module.exports = router;
