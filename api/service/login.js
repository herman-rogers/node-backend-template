var jwt = require('jsonwebtoken');

function generateWebToken(username, password) {
  var payload = {};
  payload[username] = password;
  return jwt.sign(payload, 'secret', {
    expiresIn: 1440,
  });
}

exports.dbLoginAuth = function (data) {
  var username = data.username;
  var password = data.password;
  var jsonData = { success: false, message: '' };

  return new Promise(function (fullfill, reject) {
    if (username !== 'username@email.com') {
      jsonData.message = 'Incorrect Username';
      reject(jsonData);
    } else if (password !== 'secret_password') {
      jsonData.message = 'Incorrect Password';
      reject(jsonData);
    } else {
      var token = generateWebToken(username, password);
      jsonData.success = true;
      jsonData.message = 'Login Success';
      jsonData.token = token;

      fullfill(jsonData);
    }
  });
};