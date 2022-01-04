const Project = require("../db/models/projects");
const { successHandler, errorHandler } = require("../utils/reponseHandler");

module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAndCountAll();

    successHandler(res, 200, projects);
  } catch (err) {
    errorHandler(res, 500, err, err.message);
  }
};

module.exports.createProject = async (req, res) => {
  console.log(req.user);
  const { name } = req.body;
  if (!name) {
    return errorHandler(res, 300, {}, "Name is Required.");
  }
  try {
    const project = await Project.create({
      name: name,
      userId: req.user.id,
    });

    successHandler(res, 200, project);
  } catch (err) {
    errorHandler(res, 500, err, err.message);
  }
  res.send("Create Project Route");
};

module.exports.updateProject = (req, res) => {
  const { name, projectId } = req.body;

  res.send("Update Project Route!");
};

module.exports.deleteProject = (req, res) => {
  res.send("Delete Project");
};

module.exports.findProject = (req, res) => {
  const { projectId } = req.params;
  res.send(`${projectId} is what you looking for`);
};
