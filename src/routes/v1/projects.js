const router = require("express").Router();

const ProjectController = require("../../controller/ProjectController");

router
  .route("/:id")
  .get(ProjectController.getSingleProject)
  .patch(ProjectController.updateProject);

router
  .route("/")
  .get(ProjectController.getAllProjects)
  .post(ProjectController.createProject)
  .delete(ProjectController.deleteProject);

module.exports = router;
