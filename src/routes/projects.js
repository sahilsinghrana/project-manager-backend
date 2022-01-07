const router = require("express").Router();

const ProjectController = require("../controller/ProjectController");

router.route("/:projectId").get(ProjectController.findProject);

router
  .route("/")
  .get(ProjectController.getAllProjects)
  .post(ProjectController.createProject)
  .patch(ProjectController.updateProject)
  .delete(ProjectController.deleteProject);

module.exports = router;
