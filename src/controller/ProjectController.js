const Project = require("../db/models/Project");
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
      createdBy: req.user.id,
    });
    successHandler(res, project, "Project Created Successfully.");
  } catch (err) {
    errorHandler(res, 500, err, err.message);
  }
};

module.exports.updateProject = async (req, res) => {
  const { name, id } = req.body;

  if (!name || !id)
    return errorHandler(res, 300, {}, "Name and id is required");

  const project = await Project.findOne({
    where: {
      id: id,
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

module.exports.getSingleProject = (req, res) => {
  const { id } = req.params;

  if (!id) return errorHandler(res, 403, {}, "Project Id is Required");

  res.send(`${id} is what you looking for`);
};
