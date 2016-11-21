var projectsDB = require('./service/projects');

exports.getProjects = function (req, res) {
  projectsDB.dbGetProjects().then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.getOneProject = function (req, res) {
  projectsDB.dbGetOneProject(req.params.id).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.addProject = function (req, res) {
  projectsDB.dbAddProjects(req.body).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.editProject = function (req, res) {
  var id = req.params.id;
  var project = req.body.project;

  projectsDB.dbEditProjects(id, project).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.deleteProject = function (req, res) {
  var id = req.params.id;

  projectsDB.dbDeleteProject(id).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};