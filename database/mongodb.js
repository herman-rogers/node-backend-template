var MongoClient = require('mongodb').MongoClient;

exports.mongoClient = function () {
  // example uri 'mongodb://localhost:27017/database';
  var uri = 'mongodb://stubbed/database';

  return new Promise(function (fulfill, reject) {
    return new MongoClient.connect(uri, function (err, result) {
      if(err) {
        reject(err);
        return;
      }
      fulfill(result);
    });
  })
};
