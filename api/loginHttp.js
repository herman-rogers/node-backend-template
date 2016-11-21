var loginDB = require('./service/login');

exports.loginAuth = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://www.example.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  loginDB.dbLoginAuth(req.body, res).then(function (data) {
    res.send(data);
  }).catch(function (error) {
    res.status(401);
    res.send(error);
  });
};
