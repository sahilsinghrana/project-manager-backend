const router = require("express").Router();

const ProjectController = require("../controller/ProjectController");

router.get("/", ProjectController.getAllProjects);

router.get("/:projectId", ProjectController.findProject);

router.post("/", ProjectController.createProject);

router.patch("/", ProjectController.updateProject);

router.delete("/", ProjectController.deleteProject);

module.exports = router;
