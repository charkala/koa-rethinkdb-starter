'use strict';

const controller = require('./auth.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/auth`,
  });

  router
    .get('/token', controller.getToken)
    .post('/register', controller.register);

  return router;
};
