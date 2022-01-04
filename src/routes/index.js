const router = require("express").Router();

const verifyToken = require("../middleware/verifyToken");
const auth = require("./auth");
const projects = require("./projects");

router.use("/", auth);
router.use("/project", verifyToken, projects);

module.exports = router;
