const jwt = require('jsonwebtoken');
const { secret } = require('../config');

/**
 * Sign data and return as JSON web token.
 * @param {Object} data data to sign.
 * @returns {String} signed JSON web token
 */
module.exports = (data = {}) => {
  const options = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  return jwt.sign(data, secret, options);
};
