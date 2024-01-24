const postgres = require('postgres');
require('dotenv').config();

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

async function getEntries() {
  const entries = await sql`select * FROM entry`;
  return entries;
}

async function addEntries(note) {
  console.log('inside addEntried', note);
  const addEntry = await sql`INSERT INTO entry(input)
  VALUES (${note})
  RETURNING *`;

  console.log(addEntry[0]);
  return addEntry[0];
}

async function oneEntry(id) {
  console.log('inside oneEntry:', id);
  const grabOneEntry = await sql`SELECT * FROM entry
  WHERE id = ${id}`;
  return grabOneEntry[0];
}

module.exports = { getEntries, addEntries, oneEntry };
