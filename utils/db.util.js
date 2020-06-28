'use strict'

const r = require('rethinkdb');

/**
 * Insert data into assigned table.
 * @param {Object} connection RethinkDB connection instance.
 * @param {String} table DB table to insert data into.
 * @param {Array<Object>} data Array of objects to insert.
 * @returns {Object} query result.
 */
exports.insert = async (connection, table, data) => {
  const result = await r.table(table).insert(data).run(connection);
  return result;
}