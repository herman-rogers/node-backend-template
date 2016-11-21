var mongodb = require('../../database/mongodb');
var ObjectID = require('mongodb').ObjectID;

exports.dbGetPosts = function () {
  return new Promise(function (fulfull, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('posts')
        .find()
        .toArray(function (err, result) {
          if (err) {
            reject(err);
          } else {
            for (var i = 0; i < result.length; i++) {
              result[i]['id'] = result[i]['_id'];
            }
            var emberData = { 'posts': result };
            fulfull(emberData);
          }
        });
    });
  });
};

exports.dbGetOnePost = function (id) {
  return new Promise(function (fulfull, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('posts')
        .find({ _id: ObjectID(id) })
        .toArray(function (err, result) {
          if (err) {
            reject(err);
          } else {
            for (var i = 0; i < result.length; i++) {
              result[i]['id'] = result[i]['_id'];
            }
            var emberData = { 'posts': result };
            fulfull(emberData);
          }
        });
    });
  });
};

exports.dbAddPost = function (data) {
  var post = data.post;
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('posts')
        .insertOne(post, function (err, data) {
          if (err) {
            reject(err);
          } else {
            post['id'] = post['_id'];
            var emberData = { 'posts': post };
            fullfill(emberData);
          }
        });
    });
  });
};

exports.dbEditPost = function (id, postData) {
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('posts')
        .updateOne({ _id: ObjectID(id) }, { $set: postData }, function (err, data) {
          if (err) {
            reject(err);
          } else {
            postData['id'] = id;
            var emberData = { 'posts': postData };
            fullfill(emberData);
          }
        });
    });
  });
};

exports.dbDeletePost = function (id) {
  return new Promise(function (fullfill, reject) {
    return mongodb.mongoClient().then(function (conn) {
      return conn.db('database')
        .collection('posts')
        .removeOne({ _id: ObjectID(id) }, function (err, data) {
          if (err) {
            reject(err);
          } else {
            var deleted = { id: id, deleted: true };
            var emberData = { 'posts': deleted };
            fullfill(emberData);
          }
        });
    });
  });
};