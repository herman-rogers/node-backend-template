var mongodb = require('../../database/mongodb');
var ObjectID = require('mongodb').ObjectID;

exports.dbGetProjects = function () {
  return new Promise(function (fulfull, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('projects')
        .find()
        .toArray(function (err, result) {
          if (err) {
            reject(err);
          } else {
            for (var i = 0; i < result.length; i++) {
              result[i]['id'] = result[i]['_id'];
            }
            var emberData = { 'projects': result };
            fulfull(emberData);
          }
        });
    });
  });
};

exports.dbGetOneProject = function (id) {
  return new Promise(function (fulfull, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('projects')
        .find({ _id: ObjectID(id) })
        .toArray(function (err, result) {
          if (err) {
            reject(err);
          } else {
            for (var i = 0; i < result.length; i++) {
              result[i]['id'] = result[i]['_id'];
            }
            var emberData = { 'projects': result };
            fulfull(emberData);
          }
        });
    });
  });
};

exports.dbAddProjects = function (data) {
  var project = data.project;
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('projects')
        .insertOne(project, function (err, data) {
          if (err) {
            reject(err);
          } else {
            project['id'] = project['_id'];
            var emberData = { 'projects': project };
            fullfill(emberData);
          }
        });
    });
  });
};

exports.dbEditProjects = function (id, projectData) {
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('projects')
        .updateOne({ _id: ObjectID(id) }, { $set: projectData }, function (err, data) {
          if (err) {
            reject(err);
          } else {
            projectData['id'] = id;
            var emberData = { 'projects': projectData };
            fullfill(emberData);
          }
        });
    });
  });
};

exports.dbDeleteProject = function (id) {
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('projects')
        .removeOne({ _id: ObjectID(id) }, function (err, data) {
          if (err) {
            reject(err);
          } else {
            var deleted = { id: id, deleted: true };
            var emberData = { 'projects': deleted };
            fullfill(emberData);
          }
        });
    });
  });
};