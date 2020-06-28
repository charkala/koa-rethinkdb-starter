'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('../../utils/db.util');
const generateToken = require('../../utils/generateToken.util');

exports.getToken = ctx => {
  const token = generateToken({ userID: 'charchar' });
  ctx.status = 200;
  ctx.body = { token };
};

exports.register = async (ctx) => {
  const body = ctx.request.body;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return console.log('auth.register password genSalt error:', err);

    bcrypt.hash(body.password, salt, async (err, hash) => {
      if (err) return console.log('auth.register password hash error:', err);
      const password = hash;
      const user = {
        email: body.email,
        password: password,
      };

      const newUser = await db.insertUser(ctx.rdb, 'users', user);
      console.log('newUser', newUser)

      const token = generateToken({ userID: newUser.generated_keys[0] });
      ctx.status = 200;
      return ctx.body = { token };
    });
  });
};
