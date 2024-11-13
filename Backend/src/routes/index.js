const express = require("express");
const router = express.Router();
const defaultPath = require("./DefultRoute");
const authRoute = require("./AuthRouter");
const adminRoute = require("./AdminRouter");
const { verifyToken } = require("../middleware");

router.use("/", defaultPath);
router.use("/auth", authRoute);
// router.use(verifyToken);
router.use("/admin", adminRoute);



module.exports = router;
