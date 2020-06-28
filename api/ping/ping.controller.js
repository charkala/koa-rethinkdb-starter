'use strict';

exports.ping = ctx => {
  ctx.status = 200;
  ctx.body = { status: 'success', message: 'pong' };
};
