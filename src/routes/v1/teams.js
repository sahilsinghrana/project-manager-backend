const router = require("express").Router();
const TeamController = require("../../controller/TeamController");

router
  .route("/")
  .get(TeamController.getAllTeams)
  .post(TeamController.createTeam)
  .delete(TeamController.deleteTeam);

router
  .route("/:id")
  .patch(TeamController.updateTeam)
  .get(TeamController.getSingleTeam);

module.exports = router;
