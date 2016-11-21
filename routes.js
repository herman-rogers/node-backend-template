var express = require('express');
var posts = require('./api/postsHttp');
var projects = require('./api/projectsHttp');
var login = require('./api/loginHttp');

exports.appRouter = function (app) {
  app.post('/api/login', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    login.loginAuth(req, res);
  });
  app.get('/api/posts', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    posts.getPosts(req, res);
  });
  app.get('/api/posts/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    posts.getOnePost(req, res);
  });
  app.post('/api/posts', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    posts.addPost(req, res);
  });
  app.put('/api/posts/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    posts.editPost(req, res);
  });
  app.delete('/api/posts/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    posts.deletePost(req, res);
  });
  app.get('/api/projects', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    projects.getProjects(req, res);
  });
  app.get('/api/projects/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    projects.getOneProject(req, res);
  });
  app.post('/api/projects', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    projects.addProject(req, res);
  });
  app.put('/api/projects/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    projects.editProject(req, res);
  });
  app.delete('/api/projects/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://www.boomerrogers.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    projects.deleteProject(req, res);
  });
};