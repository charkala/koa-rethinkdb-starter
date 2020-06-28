const r = require('rethinkdb');
const databaseConfig = require('../config').databaseConfig;

module.exports = async (ctx, next) => {
  try {
    const conn = await r.connect(databaseConfig);
    ctx.rdb = conn;
    await next();
  }
  catch (err) {
    if (err.status >= 500) console.log('Error handler:', err);
    ctx.status = err.status || 500;
    ctx.body = {
      status: 'failed',
      message: err.message || 'Internal server error',
    };
  }
};
