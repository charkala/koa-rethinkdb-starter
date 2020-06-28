'use strict'

const r = require('rethinkdb');

exports.insertUser = async (connection, table, { email, password }) => {
  const result = await r.table(table).insert([
    {
      email: email,
      password: password,
    }
  ]).run(connection);

  return result;
}