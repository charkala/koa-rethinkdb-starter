const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = (data = {}) => {
  const options = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  return jwt.sign(data, secret, options);
};
