const postgres = require('postgres');
require('dotenv').config();

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

async function getEntries() {
  const entries = await sql`select * FROM entry`;
  return entries;
}

async function addEntries(input) {
  const addEntry = await sql`INSERT INTO entry(input)
  VALUES (${input})
  return input`;
  return addEntry[0];
}

module.exports = { getEntries, addEntries };
