const Project = require("../db/models/projects");
const { successHandler, errorHandler } = require("../utils/reponseHandler");

module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAndCountAll();
    successHandler(res, projects);
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
    successHandler(res, project, "Project Created Successfully.");
  } catch (err) {
    errorHandler(res, 500, err, err.message);
  }
};

module.exports.updateProject = async (req, res) => {
  const { name, projectId } = req.body;

  if (!name || !projectId)
    return errorHandler(res, 300, {}, "Name and projectId is required");

  const project = await Project.findOne({
    where: {
      id: projectId,
    },
  });

  if (!project) return errorHandler(res, 404, {}, "No Projects Found");

  project.update({
    name: name,
  });

  successHandler(res, project, "Project Updated Successfully");
};

module.exports.deleteProject = (req, res) => {
  res.send("Delete Project");
};

module.exports.findProject = (req, res) => {
  const { projectId } = req.params;
  res.send(`${projectId} is what you looking for`);
};
