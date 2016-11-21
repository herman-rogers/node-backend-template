var postsDB = require('./service/posts');

exports.getPosts = function (req, res) {
  postsDB.dbGetPosts().then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.getOnePost = function (req, res) {
  postsDB.dbGetOnePost(req.params.id).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.addPost = function (req, res) {
  postsDB.dbAddPost(req.body).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.editPost = function (req, res) {
  var id = req.params.id;
  var post = req.body.post;

  postsDB.dbEditPost(id, post).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};

exports.deletePost = function (req, res) {
  var id = req.params.id;

  postsDB.dbDeletePost(id).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.send(error);
  });
};